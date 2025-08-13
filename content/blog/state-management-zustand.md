---
title: "State Management with Zustand"
excerpt: "A comprehensive guide to managing application state using Zustand, a lightweight alternative to Redux."
date: "2024-11-28"
tags: ["Zustand", "State Management", "React"]
published: true
---

# State Management with Zustand

Zustand is a small, fast, and scalable state management solution for React applications. It provides a simpler alternative to Redux while maintaining powerful features.

## Why Zustand?

Zustand offers several advantages:

- **Minimal boilerplate**: Less code to write and maintain
- **TypeScript-first**: Excellent TypeScript support out of the box
- **No providers**: No need to wrap your app in context providers
- **Flexible**: Works with any React pattern
- **Small bundle size**: Under 1KB gzipped

## Installation

```bash
npm install zustand
```

## Basic Store Creation

Creating a store with Zustand is straightforward:

```typescript
import { create } from 'zustand'

interface BearState {
  bears: number
  increase: (by: number) => void
  decrease: (by: number) => void
  reset: () => void
}

const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
  decrease: (by) => set((state) => ({ bears: state.bears - by })),
  reset: () => set({ bears: 0 }),
}))
```

## Using the Store

Using the store in components is simple:

```tsx
function BearCounter() {
  const bears = useBearStore((state) => state.bears)
  return <h1>{bears} around here...</h1>
}

function Controls() {
  const increase = useBearStore((state) => state.increase)
  const decrease = useBearStore((state) => state.decrease)
  const reset = useBearStore((state) => state.reset)
  
  return (
    <div>
      <button onClick={() => increase(1)}>+1</button>
      <button onClick={() => decrease(1)}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
```

## Advanced Patterns

### Async Actions

Handle asynchronous operations easily:

```typescript
interface TodoState {
  todos: Todo[]
  loading: boolean
  fetchTodos: () => Promise<void>
  addTodo: (text: string) => Promise<void>
}

const useTodoStore = create<TodoState>()((set, get) => ({
  todos: [],
  loading: false,
  
  fetchTodos: async () => {
    set({ loading: true })
    try {
      const response = await fetch('/api/todos')
      const todos = await response.json()
      set({ todos, loading: false })
    } catch (error) {
      set({ loading: false })
      // Handle error
    }
  },
  
  addTodo: async (text) => {
    const response = await fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify({ text }),
    })
    const newTodo = await response.json()
    set((state) => ({ todos: [...state.todos, newTodo] }))
  },
}))
```

### Subscriptions

Subscribe to store changes outside of React:

```typescript
const unsubscribe = useBearStore.subscribe(
  (state) => state.bears,
  (bears) => console.log('Bears changed to:', bears)
)

// Cleanup
unsubscribe()
```

### Middleware

Add middleware for debugging and persistence:

```typescript
import { devtools, persist } from 'zustand/middleware'

const useBearStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        increase: (by) => set((state) => ({ bears: state.bears + by })),
        // ... other actions
      }),
      { name: 'bear-storage' }
    )
  )
)
```

## Best Practices

1. **Single Responsibility**: Keep stores focused on specific domains
2. **Immutable Updates**: Always return new objects from state updates
3. **Selector Optimization**: Use specific selectors to prevent unnecessary re-renders
4. **Action Separation**: Keep actions separate from state for better organization
5. **TypeScript**: Leverage TypeScript for better developer experience

## Store Composition

Split large stores into smaller, composable pieces:

```typescript
// User slice
const createUserSlice = (set, get) => ({
  user: null,
  login: (credentials) => {
    // Login logic
  },
  logout: () => {
    // Logout logic
  },
})

// App slice
const createAppSlice = (set, get) => ({
  theme: 'light',
  toggleTheme: () => set((state) => ({ 
    theme: state.theme === 'light' ? 'dark' : 'light' 
  })),
})

// Combined store
const useStore = create((...a) => ({
  ...createUserSlice(...a),
  ...createAppSlice(...a),
}))
```

## Testing

Testing Zustand stores is straightforward:

```typescript
import { act, renderHook } from '@testing-library/react'
import { useBearStore } from './bearStore'

test('should increase bear count', () => {
  const { result } = renderHook(() => useBearStore())
  
  act(() => {
    result.current.increase(2)
  })
  
  expect(result.current.bears).toBe(2)
})
```

## Migration from Redux

Moving from Redux to Zustand:

```typescript
// Redux style (verbose)
const INCREMENT = 'INCREMENT'
const increment = (payload) => ({ type: INCREMENT, payload })

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload }
    default:
      return state
  }
}

// Zustand style (concise)
const useStore = create((set) => ({
  count: 0,
  increment: (by) => set((state) => ({ count: state.count + by })),
}))
```

## Conclusion

Zustand provides a refreshing approach to state management in React applications. Its simplicity, flexibility, and powerful features make it an excellent choice for projects of any size.

Try Zustand in your next project and experience the joy of simple state management!
