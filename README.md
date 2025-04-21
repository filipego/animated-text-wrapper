Okay, here is a `README.md` file explaining how to use the `TextAnimateOnScroll` component.

```markdown
# TextAnimateOnScroll Component

A reusable React component for animating text elements on scroll using GSAP, ScrollTrigger, and SplitType within a Next.js 15+ project (using Tailwind 4). It provides various pre-defined, staggered text animations that trigger when the element enters the viewport.

## Features

*   Animates text (words or letters) on scroll.
*   Uses GSAP & ScrollTrigger for smooth, performant animations.
*   Uses SplitType for easy text splitting.
*   Provides multiple animation types via a simple prop.
*   Allows customization of the HTML tag, CSS classes, stagger, and duration.
*   Designed as a Client Component (`"use client"`) for Next.js App Router.
*   Includes automatic cleanup of GSAP instances on unmount.
*   Compatible with Tailwind 4's config-less approach.

## Installation

1.  **Install Dependencies:**
    Make sure you have GSAP and SplitType installed in your project.

    ```bash
    npm install gsap split-type
    # or
    yarn add gsap split-type
    # or
    pnpm add gsap split-type
    ```

2.  **Place the Component:**
    Copy the `TextAnimateOnScroll.tsx` file into your project, for example, under `./components/`.

## Usage

Import the component into your page or another client component. Remember that the `TextAnimateOnScroll` component itself uses the `"use client"` directive, so any component directly using it must also be a Client Component or rendered within one.

```typescript
// Example: app/some-page/page.tsx (or any client component .tsx file)
"use client"; // Make sure the parent component is also a client component if needed

import TextAnimateOnScroll, {
  AnimationType,
} from "../components/TextAnimateOnScroll"; // Adjust import path if needed

export default function SomePage() {
  return (
    <div className="p-10 space-y-20">
      <section className="min-h-[50vh] flex items-center">
        <TextAnimateOnScroll
          animationType="wordsSlideUp"
          tag="h1"
          className="text-6xl font-bold"
        >
          Hello World, Sliding Up!
        </TextAnimateOnScroll>
      </section>

      <section className="min-h-[50vh] flex items-center">
        <TextAnimateOnScroll
          animationType="lettersFadeInRandom"
          tag="p"
          className="text-2xl"
          staggerAmount={0.5} // Optional: customize stagger
          duration={0.1}     // Optional: customize duration
        >
          Each letter fades in randomly creating a cool effect.
        </TextAnimateOnScroll>
      </section>

       <section className="min-h-[50vh] flex items-center">
        <TextAnimateOnScroll
          animationType="scrubEachWord"
          tag="h2"
          className="text-5xl font-serif italic"
        >
          Scrub through this text as you scroll the page up and down.
        </TextAnimateOnScroll>
      </section>

      {/* Add more sections or content */}
      <div className="h-screen"></div> {/* Extra space for scrolling */}
    </div>
  );
}
```

## Props

| Prop                | Type                          | Required | Default      | Description                                                                                                                            |
| :------------------ | :---------------------------- | :------- | :----------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| `children`          | `React.ReactNode`             | Yes      | -            | The text content you want to animate.                                                                                                  |
| `animationType`     | `AnimationType`               | Yes      | -            | Determines the specific animation effect to apply. See "Available Animation Types" below.                                               |
| `tag`               | `keyof JSX.IntrinsicElements` | No       | `'div'`      | The HTML tag to render the text within (e.g., 'h1', 'h2', 'p', 'span', 'div').                                                        |
| `className`         | `string`                      | No       | `''`         | Additional Tailwind CSS or custom classes to apply to the wrapper element.                                                               |
| `staggerAmount`     | `number`                      | No       | Varies\*     | Overrides the default stagger amount (total duration for the stagger effect). Useful for fine-tuning timing.                             |
| `duration`          | `number`                      | No       | Varies\*     | Overrides the default duration for each individual word/letter animation.                                                                |
| `startTrigger`      | `string`                      | No       | `'top bottom'` | Overrides the default GSAP ScrollTrigger `start` property (e.g., `'top center'`, `'bottom 80%'`). Defines when the animation begins. |
| `endTrigger`        | `string`                      | No       | `'bottom top'` | Overrides the default GSAP ScrollTrigger `end` property. Often less critical unless using scrub or specific end behaviors.             |

\*_Default `staggerAmount` and `duration` values are set internally for each `animationType` but can be overridden._

## Available Animation Types (`AnimationType`)

Use one of these strings for the `animationType` prop:

*   `'wordsSlideUp'`
*   `'wordsRotateIn'`
*   `'wordsSlideFromRight'`
*   `'lettersSlideUp'`
*   `'lettersSlideDown'`
*   `'lettersFadeIn'`
*   `'lettersFadeInRandom'`
*   `'scrubEachWord'` (Links word fade-in progress directly to scroll progress)

## Notes

*   **Client Component:** This component requires client-side JavaScript to function (GSAP, SplitType, DOM manipulation). Ensure it's used within a component marked with `"use client"`.
*   **Tailwind 4:** Assumes a standard Next.js 15+ setup where Tailwind 4 works without explicit configuration. Ensure your `globals.css` has the necessary `@tailwind` directives.
*   **`overflow-hidden`:** The component automatically applies `overflow-hidden` to its container tag to properly contain animations that move elements outside their original bounds (like slide up/down).
*   **Performance:** While GSAP is highly performant, animating a very large number of individual letters (`letters...` types) on complex pages might impact performance. Test accordingly. The `words...` types are generally less intensive.
*   **Scrub Effect:** The `scrubEachWord` animation behaves differently. It directly ties the animation state to the scrollbar position between its `start` and `end` triggers, allowing the user to "scrub" through the animation. It doesn't use the `onEnter`/`onLeaveBack` play/reset logic like the other types.
```

This README provides a good starting point for anyone wanting to use your `TextAnimateOnScroll` component. You can add more details or examples as needed.