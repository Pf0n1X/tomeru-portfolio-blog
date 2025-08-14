---
title: "React Signals: Rethinking State in Your Components"
excerpt: "Learn how React Signals offer fine-grained reactivity and better performance by updating only the DOM nodes that depend on changed state."
date: "2025-01-14"
tags: ["React", "State Management", "Performance"]
published: true
---

# React Signals: Rethinking State in Your Components

Ever felt frustrated by unnecessary re-renders in React?

Signals offer a fresh way to manage state by making your UI reactive by default. Instead of re-running your entire component on every state change, Signals track exactly where values are used — and update only those parts of the UI.

Here's what that means in practice:

## 1. Simplified Local State

**Instead of:**
```javascript
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>{count}</button>
```

**With Signals:**
```javascript
const count = signal(0);
<button onClick={() => count.value++}>{count}</button>
```

## How This Optimizes Updates

**Normally:** Updating React state triggers the entire component function to re-run, and React has to diff the new output against the previous render.

**With Signals:**
- React knows exactly which DOM text nodes or elements depend on `count`
- When `count.value` changes, it patches only those specific parts of the DOM
- The rest of the component doesn't re-run, saving computation and improving runtime performance

This is **fine-grained reactivity**: instead of a full top-down render, only what's actually affected updates.

## 2. Derived / Computed Values

Need something like "computed state"?

```javascript
const price = signal(100);
const tax = signal(0.2);
const total = computed(() => price.value * (1 + tax.value));
```

When `price` or `tax` changes, `total` updates automatically — no manual wiring.

## 3. Shared Global State

Define outside components:
```javascript
export const theme = signal('light');
```

Then use it anywhere:
```javascript
<button onClick={() => theme.value = 'dark'}>Dark mode</button>
<p>Current theme: {theme}</p>
```

## 4. Effects: React to Changes Reactively

Run logic whenever signals change:
```javascript
effect(() => {
  console.log('Count changed:', count.value);
});
```

Like a cleaner, dependency-free `useEffect`.

## 5. Batch: Update Multiple Signals Together

Prevent extra recalculations or DOM updates:
```javascript
batch(() => {
  count.value++;
  price.value = 120;
});
```

All updates happen inside the batch; the DOM patches only once at the end.

## 6. Better Performance with Fine-Grained Updates

By updating only the DOM nodes that depend on changed signals, Signals help avoid over-rendering — especially valuable in large trees or live data UIs.

## How to Try It Today

React itself doesn't (yet) have built-in signals, but you can try them with:
- `@preact/signals-react`
- `@preact/signals` (for Preact users)

## Final Thoughts

Signals probably won't replace `useState`, but they help move React toward a more reactive, performant model by:

✅ Tracking where values are used  
✅ Updating only the affected DOM nodes  
✅ Avoiding re-running entire component functions

The future of React state management is looking more reactive and efficient!
