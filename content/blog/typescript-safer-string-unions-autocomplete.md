---
title: "TypeScript Tip: Safer String Unions with Autocomplete and Flexibility"
excerpt: "Learn a clever TypeScript pattern that provides autocomplete for known values while allowing custom strings using union types."
date: "2025-01-14"
tags: ["TypeScript", "JavaScript", "Developer Tools"]
published: true
---

# TypeScript Tip: Safer String Unions with Autocomplete and Flexibility

If you want to define a type that includes specific string literals and allows custom strings, try this pattern:

```typescript
type Model = 'chatGPT' | 'Gemini' | (string & {});
```

## Why this is helpful:

✅ You get autocomplete and type safety for known values like `'chatGPT'` and `'Gemini'`  
✅ You can still use any other string like `'Claude3'` or `'custom-model'`  
✅ TypeScript preserves the literal suggestions, which you'd lose with just `string`

## Compare with:

```typescript
// ❌ No literal suggestions
type Model1 = string;

// ❌ Treated as just `string`
type Model2 = 'chatGPT' | 'Gemini' | string;

// ✅ Best of both worlds
type Model3 = 'chatGPT' | 'Gemini' | (string & {});
```

## Usage example:

```typescript
function useModel(model: Model3) {
  // ...
}

useModel('chatGPT'); // ✅ autocomplete
useModel('Gemini');  // ✅ autocomplete
useModel('Claude3'); // ✅ allowed, no autocomplete
```

## Under the hood:

🧠 `string & {}` is a clever trick—it behaves like a string but avoids collapsing the union to plain `string`. This keeps TypeScript's autocomplete and type checking for literal members intact.

## Perfect for:

📦 Great for APIs, model selectors, config schemas—anywhere you want smart defaults and full flexibility.
