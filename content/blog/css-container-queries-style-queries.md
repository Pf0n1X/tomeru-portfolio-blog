---
title: "CSS Container Queries – Now with Style Queries!"
excerpt: "Explore how CSS Container Queries and Style Queries enable components to adapt to their container size and properties, not just the viewport."
date: "2025-01-14"
tags: ["CSS", "Responsive Design", "Web Development"]
published: true
---

# CSS Container Queries – Now with Style Queries!

We've used media queries for years — but what if your component could adapt to its container, not just the viewport?

That's what CSS Container Queries are for. And now with style queries, components can even adapt based on CSS properties passed down from their container.

## Core Concepts

### container-type

Defines how the container can be queried:

- **inline-size**: Query container width (most common)
- **size**: Query both width and height
- **normal**: Not usable for size or scroll state queries
- **Allowed for style queries** — no need to declare containment manually!

```css
.card-list {
  container-type: inline-size;
}
```

### container-name

Gives a container a name so child components can target it explicitly:

```css
.sidebar {
  container-name: layout;
  container-type: inline-size;
}
```

### @container rule

Write conditional styles based on container dimensions or declared custom properties.

## Size Query Example

```css
@container layout (min-width: 600px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Style Query Example

```css
/* Container sets a custom property */
.featured-section {
  container-name: section;
  --variant: highlighted;
  /* No need for container-type for style queries */
}

/* Child adapts based on container's property */
@container section style(--variant: highlighted) {
  .card {
    background-color: pink;
    border: 2px solid deeppink;
  }
}
```

## Scroll-State Queries

When you set `container-type: scroll-state`, you can query scroll conditions using:

- **scrollable**: is there overflow?
- **snapped**: is the container snapped (via scroll-snap)?
- **stuck**: is a position: sticky element stuck?

### Example – Show "Back to top" button when scrolled:

```css
html {
  container-type: scroll-state;
  container-name: page;
}

@container page scroll-state(scrollable: top) {
  .back-to-top {
    opacity: 1;
    pointer-events: auto;
  }
}
```

### Example – Highlight snapped sections:

```css
section {
  container-type: scroll-state;
  container-name: snap;
  scroll-snap-align: center;
}

@container snap scroll-state(snapped: y) {
  .wrapper {
    background: purple;
    color: white;
  }
}
```

### Example – Style sticky headers:

```css
header {
  position: sticky;
  top: 0;
  container-type: scroll-state;
  container-name: sticky;
}

@container sticky scroll-state(stuck: top) {
  header {
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  }
}
```

## Important Note

⚠️ Style queries can currently only match custom properties (`--something`), not standard properties like `background` or `font-size`.

## Why Use Style Queries?

✅ Make components react to design modes (`--variant: card`, `--dense: true`)  
✅ Avoid extra classes and reduce global state dependency  
✅ Enable smarter, reusable, context-aware UI components

Container + Style Queries are changing the game for modular CSS and responsive design systems.

Have you tried them yet?
