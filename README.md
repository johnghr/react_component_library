# react-components (UI component library) — Work in Progress

This repository contains a small but growing **React component library** exploring design-system patterns, composable UI primitives, and the intersection of visual design and implementation.

It reflects how I approach:

-   building reusable, typed components
-   structuring UI libraries for real product use
-   translating visual design intent into maintainable code

This is **not a complete production design system**, but a practical foundation and working playground for patterns, components, and conventions.

---

## What’s Included

### Components

-   **Buttons**
    -   CommonButton (variants: elevated, filled, outlined, text, tonal)
    -   IconButton
    -   FAB / Extended FAB
-   **Navigation & Layout**
    -   Drawer
    -   Navigation Drawer
    -   Navigation Link
    -   Accordion / Accordion Drawer
-   **Search**
    -   Search input and related patterns
-   **Icons**
    -   Typed icon system with shared SVG base

### Supporting Structure

-   **Storybook** for visual exploration and API discovery
-   **SCSS foundations** for colour, typography, elevation, and state layers
-   **Component-level tests** using Vitest + Testing Library
-   Typed component APIs and constrained variants using TypeScript

---

## Design & Engineering Approach

This project is intentionally opinionated:

-   Components are designed to be **composable rather than overly abstract**
-   Variants are constrained and typed to keep APIs predictable
-   Styling is organised around shared foundations rather than per-component overrides
-   Storybook stories are treated as part of the documentation surface
-   Tests focus on behaviour and public APIs, not implementation details

The goal is to keep the system **approachable for simple use cases**, while allowing it to scale to more complex ones without becoming fragile.

---

## Running Locally

Install dependencies:

```bash
npm install
```
