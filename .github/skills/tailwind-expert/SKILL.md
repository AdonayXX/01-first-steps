---
name: tailwind-expert
description: Expert knowledge for Tailwind CSS styling, utility classes, responsive design, dark mode, animations, and component patterns. Use when working with CSS styling, UI components, layouts, responsive breakpoints, or design systems in Tailwind projects.
---

# Tailwind CSS Expert Skill

## Overview
This skill provides comprehensive guidance for working with Tailwind CSS in modern web projects, particularly Next.js applications.

## Core Principles

### 1. Utility-First Approach
- Use utility classes directly in HTML/JSX instead of writing custom CSS
- Compose complex designs from small, single-purpose utilities
- Avoid premature abstraction - duplicate utility combinations are fine initially

### 2. Class Organization
Order classes consistently for readability:
1. Layout (display, position, flex/grid)
2. Spacing (margin, padding)
3. Sizing (width, height)
4. Typography (font, text)
5. Visual (colors, backgrounds, borders)
6. Effects (shadows, opacity, transitions)

```jsx
// Good: Organized class order
<div className="flex items-center justify-between p-4 w-full text-sm font-medium text-gray-900 bg-white border rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
```

## Responsive Design

### Breakpoint Prefixes
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

### Mobile-First Strategy
Always design for mobile first, then add responsive modifiers:

```jsx
// Mobile: stack, Tablet+: side by side
<div className="flex flex-col md:flex-row gap-4">
  <aside className="w-full md:w-64">Sidebar</aside>
  <main className="flex-1">Content</main>
</div>
```

## Dark Mode

### Implementation
Use the `dark:` variant for dark mode styles:

```jsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  <h1 className="text-gray-800 dark:text-gray-100">Title</h1>
</div>
```

### Configuration
Enable dark mode in `tailwind.config.js`:
```js
module.exports = {
  darkMode: 'class', // or 'media' for system preference
}
```

## Common Patterns

### Centering Content
```jsx
// Flexbox centering
<div className="flex items-center justify-center min-h-screen">

// Grid centering
<div className="grid place-items-center min-h-screen">
```

### Container with Max Width
```jsx
<div className="container mx-auto px-4 max-w-6xl">
```

### Card Component
```jsx
<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card Title</h3>
  <p className="text-gray-600 dark:text-gray-300">Card content</p>
</div>
```

### Button Variants
```jsx
// Primary button
<button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">

// Secondary button
<button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg transition-colors">

// Outline button
<button className="px-4 py-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium rounded-lg transition-colors">
```

### Navigation Bar
```jsx
<nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
  <div className="container mx-auto px-4 h-16 flex items-center justify-between">
    <a href="/" className="text-xl font-bold">Logo</a>
    <div className="hidden md:flex items-center gap-6">
      <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Link</a>
    </div>
  </div>
</nav>
```

## Animations & Transitions

### Basic Transitions
```jsx
// Color transition
<button className="transition-colors duration-200 hover:bg-blue-600">

// Multiple properties
<div className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">

// Transform only
<div className="transition-transform duration-200 hover:-translate-y-1">
```

### Built-in Animations
```jsx
<div className="animate-spin">   // Spinning loader
<div className="animate-pulse">  // Pulsing effect
<div className="animate-bounce"> // Bouncing element
<div className="animate-ping">   // Ping/ripple effect
```

## Spacing System
Tailwind uses a consistent spacing scale (1 unit = 0.25rem = 4px):
- `p-1` = 4px
- `p-2` = 8px
- `p-4` = 16px
- `p-6` = 24px
- `p-8` = 32px

Use consistent spacing throughout your design:
```jsx
<div className="space-y-4">  // Vertical spacing between children
<div className="gap-4">      // Gap in flex/grid layouts
```

## Typography

### Font Sizes
```jsx
<p className="text-xs">12px</p>
<p className="text-sm">14px</p>
<p className="text-base">16px (default)</p>
<p className="text-lg">18px</p>
<p className="text-xl">20px</p>
<p className="text-2xl">24px</p>
<p className="text-3xl">30px</p>
```

### Font Weight
```jsx
<p className="font-light">300</p>
<p className="font-normal">400</p>
<p className="font-medium">500</p>
<p className="font-semibold">600</p>
<p className="font-bold">700</p>
```

## Best Practices

### 1. Extract Components, Not Classes
Instead of `@apply`, create React components:

```jsx
// ✅ Good - React component
function Button({ children, variant = 'primary' }) {
  const baseStyles = "px-4 py-2 font-medium rounded-lg transition-colors";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900"
  };
  return <button className={`${baseStyles} ${variants[variant]}`}>{children}</button>;
}
```

### 2. Use Arbitrary Values Sparingly
```jsx
// Use when design requires specific values not in the scale
<div className="w-[137px] h-[42px] top-[117px]">
```

### 3. Group States Logically
```jsx
// Group hover, focus, active states
<button className="
  bg-blue-600 text-white
  hover:bg-blue-700
  focus:outline-none focus:ring-2 focus:ring-blue-500
  active:bg-blue-800
  disabled:opacity-50 disabled:cursor-not-allowed
">
```

### 4. Use CSS Variables for Theming
```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-primary: 59 130 246; /* blue-500 RGB */
}

.dark {
  --color-primary: 96 165 250; /* blue-400 RGB */
}
```

## Next.js Specific

### App Router Integration
In Next.js App Router, import globals.css in the root layout:

```tsx
// app/layout.tsx
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  )
}
```

### Conditional Classes with clsx/cn
Use `clsx` or `cn` utility for conditional classes:

```tsx
import { clsx } from 'clsx';
// or with tailwind-merge
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

<button className={cn(
  "px-4 py-2 rounded-lg",
  isActive && "bg-blue-600 text-white",
  isDisabled && "opacity-50 cursor-not-allowed"
)}>
```

## Debugging Tips

1. Use `outline outline-red-500` to visualize element boundaries
2. Use `bg-red-500/20` (with opacity) to highlight sections
3. Browser DevTools: Look for Tailwind classes in the Elements panel
4. Use `@tailwindcss/forms` plugin for better form styling defaults