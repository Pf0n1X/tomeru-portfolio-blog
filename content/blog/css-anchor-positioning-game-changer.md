---
title: "CSS Anchor Positioning — A Game Changer for Tooltips & Floating UI"
excerpt: "Discover the new CSS Anchor Positioning properties that simplify tooltip and floating UI positioning without JavaScript workarounds."
date: "2025-01-14"
tags: ["CSS", "Web Development", "UI/UX"]
published: true
---

# CSS Anchor Positioning — A Game Changer for Tooltips & Floating UI

If you've ever tried to position a tooltip exactly above another DOM element, you probably remember the hoops you had to jump through. Between `position: static`, nesting elements, and adjusting with JavaScript to handle scroll, zoom, and resize — it was never clean or simple.

💡 Enter CSS Anchor Positioning — a new set of CSS properties designed to solve those layout headaches. You can now directly link a floating element (like a tooltip or dropdown) to its anchor using pure CSS.

## New CSS Properties Include:

- `anchor-name`
- `position-anchor`
- `position-area`
- `position-try-fallbacks`
- `position-try-order`
- `position-try` (shorthand)
- `position-visibility`
- `anchor-scope` (not yet implemented)

## Quick Example:

```css
.anchor {
  anchor-name: --some-name;
}

.target {
  position: absolute;
  position-anchor: --some-name;
}
```

📌 **Note:** Browser support is still evolving — but it's improving rapidly.

## Learn More:

- [Mozilla Developer Docs](https://lnkd.in/dwHjbaCB)
- [CSS-Tricks article](https://lnkd.in/dNPmP9pp)
- [Kevin Powell's video](https://lnkd.in/d4yecfs4)
