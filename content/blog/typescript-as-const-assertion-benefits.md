---
title: "Why You Should Use as const in TypeScript"
excerpt: "Discover how the as const assertion creates precise literal types, immutable data structures, and better type safety in TypeScript."
date: "2025-01-14"
tags: ["TypeScript", "JavaScript", "Developer Tips"]
published: true
---

# Why You Should Use `as const` in TypeScript

The `as const` assertion is a small feature with big benefits. Here's how it can improve your TypeScript code:

## Literal Types, Not Generalized Ones

```typescript
const color = "blue"; // type: string
const color = "blue" as const; // type: "blue"
```

✅ Get precise literal types instead of broad generic types

## Immutable Arrays and Objects

```typescript
const roles = ["admin", "user"] as const;
// type: readonly ["admin", "user"]
```

✅ Create read-only data structures that TypeScript can reason about

## Cleaner Discriminated Unions

```typescript
const statuses = {
  SUCCESS: "success",
  ERROR: "error",
} as const;

type Status = typeof statuses[keyof typeof statuses];
// type: "success" | "error"
```

✅ Build type-safe enums and union types from objects

## Better Autocompletion & Type Safety

By narrowing types, `as const` helps TypeScript provide smarter suggestions and catch bugs earlier.

## Pro Tip

💡 Use `as const` when you want precise, read-only, and narrow types. It's especially handy for:
- Enums
- Config objects  
- Action types
- Any data that shouldn't change

The `as const` assertion is a powerful tool for creating more robust and type-safe TypeScript applications with minimal effort.
