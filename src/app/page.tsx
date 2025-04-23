// app/page.tsx
import TextAnimateOnScroll, {
  AnimationType,
} from "./components/TextAnimateOnScroll"; // Correct import path

const longText = "My long heading goes here for a staggered scroll animation";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10 md:p-24 bg-white text-black dark:bg-black dark:text-white">
      {/* Section 1: Words Slide Up */}
      <section className="w-full max-w-4xl min-h-[70vh] flex flex-col justify-center items-start py-16 border-b border-gray-300 dark:border-gray-700">
        <p className="mb-4 px-3 py-1 text-sm border border-gray-400 dark:border-gray-600 rounded-full inline-block font-mono">
          Words Slide Up
        </p>
        <TextAnimateOnScroll
          tag="h1"
          animationType="wordsSlideUp"
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          {longText}
        </TextAnimateOnScroll>
      </section>

      {/* Section 2: Words Rotate In */}
      <section className="w-full max-w-4xl min-h-[70vh] flex flex-col justify-center items-start py-16 border-b border-gray-300 dark:border-gray-700">
        <p className="mb-4 px-3 py-1 text-sm border border-gray-400 dark:border-gray-600 rounded-full inline-block font-mono">
          Words Rotate In
        </p>
        <TextAnimateOnScroll
          tag="h1"
          animationType="wordsRotateIn"
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          {longText}
        </TextAnimateOnScroll>
      </section>

      {/* Section 3: Words Slide From Right */}
      <section className="w-full max-w-4xl min-h-[70vh] flex flex-col justify-center items-start py-16 border-b border-gray-300 dark:border-gray-700">
        <p className="mb-4 px-3 py-1 text-sm border border-gray-400 dark:border-gray-600 rounded-full inline-block font-mono">
          Words Slide From Right
        </p>
        <TextAnimateOnScroll
          tag="h1"
          animationType="wordsSlideFromRight"
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          {longText}
        </TextAnimateOnScroll>
      </section>

      {/* Section 4: Letters Slide Up */}
      <section className="w-full max-w-4xl min-h-[70vh] flex flex-col justify-center items-start py-16 border-b border-gray-300 dark:border-gray-700">
        <p className="mb-4 px-3 py-1 text-sm border border-gray-400 dark:border-gray-600 rounded-full inline-block font-mono">
          Letters Slide Up
        </p>
        <TextAnimateOnScroll
          tag="h1"
          animationType="lettersSlideUp"
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          {longText}
        </TextAnimateOnScroll>
      </section>

      {/* Section 5: Letters Slide Down */}
      <section className="w-full max-w-4xl min-h-[70vh] flex flex-col justify-center items-start py-16 border-b border-gray-300 dark:border-gray-700">
        <p className="mb-4 px-3 py-1 text-sm border border-gray-400 dark:border-gray-600 rounded-full inline-block font-mono">
          Letters Slide Down
        </p>
        <TextAnimateOnScroll
          tag="h1"
          animationType="lettersSlideDown"
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          {longText}
        </TextAnimateOnScroll>
      </section>

      {/* Section 6: Letters Fade In */}
      <section className="w-full max-w-4xl min-h-[70vh] flex flex-col justify-center items-start py-16 border-b border-gray-300 dark:border-gray-700">
        <p className="mb-4 px-3 py-1 text-sm border border-gray-400 dark:border-gray-600 rounded-full inline-block font-mono">
          Letters Fade In
        </p>
        <TextAnimateOnScroll
          tag="h1"
          animationType="lettersFadeIn"
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          {longText}
        </TextAnimateOnScroll>
      </section>

      {/* Section 7: Letters Fade In Random */}
      <section className="w-full max-w-4xl min-h-[70vh] flex flex-col justify-center items-start py-16 border-b border-gray-300 dark:border-gray-700">
        <p className="mb-4 px-3 py-1 text-sm border border-gray-400 dark:border-gray-600 rounded-full inline-block font-mono">
          Letters Fade In Random
        </p>
        <TextAnimateOnScroll
          tag="h1"
          animationType="lettersFadeInRandom"
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          {longText}
        </TextAnimateOnScroll>
      </section>

      {/* Section 8: Scrub Each Word */}
      <section className="w-full max-w-4xl min-h-[70vh] flex flex-col justify-center items-start py-16 border-b border-gray-300 dark:border-gray-700">
        <p className="mb-4 px-3 py-1 text-sm border border-gray-400 dark:border-gray-600 rounded-full inline-block font-mono">
          Scrub Each Word
        </p>
        <TextAnimateOnScroll
          tag="h1"
          animationType="scrubEachWord"
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          {longText}
        </TextAnimateOnScroll>
      </section>

      {/* Section 9: Line Slide Up */}
      <section className="w-full max-w-4xl min-h-[70vh] flex flex-col justify-center items-start py-16 border-b border-gray-300 dark:border-gray-700">
        <p className="mb-4 px-3 py-1 text-sm border border-gray-400 dark:border-gray-600 rounded-full inline-block font-mono">
          Line Slide Up
        </p>
        <TextAnimateOnScroll
          tag="h1"
          animationType="lineSlideUp"
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          {longText}
        </TextAnimateOnScroll>
      </section>

      {/* Section 10: Line Slide Up Stagger */}
      <section className="w-full max-w-4xl min-h-[70vh] flex flex-col justify-center items-start py-16 border-b border-gray-300 dark:border-gray-700">
        <p className="mb-4 px-3 py-1 text-sm border border-gray-400 dark:border-gray-600 rounded-full inline-block font-mono">
          Line Slide Up Stagger
        </p>
        <TextAnimateOnScroll
          tag="h1"
          animationType="lineSlideUpStagger"
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          {longText}
        </TextAnimateOnScroll>
      </section>

      {/* Section 11 Line Slide Down */}
      <section className="w-full max-w-4xl min-h-[70vh] flex flex-col justify-center items-start py-16 border-b border-gray-300 dark:border-gray-700">
        <p className="mb-4 px-3 py-1 text-sm border border-gray-400 dark:border-gray-600 rounded-full inline-block font-mono">
          Line Slide Down
        </p>
        <TextAnimateOnScroll
          tag="h1"
          animationType="lineSlideDown"
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          {longText}
        </TextAnimateOnScroll>
      </section>

      {/* Section 12 Line Slide Down Stagger */}
      <section className="w-full max-w-4xl min-h-[70vh] flex flex-col justify-center items-start py-16 border-b border-gray-300 dark:border-gray-700">
        <p className="mb-4 px-3 py-1 text-sm border border-gray-400 dark:border-gray-600 rounded-full inline-block font-mono">
          Line Slide Down Stagger
        </p>
        <TextAnimateOnScroll
          tag="h1"
          animationType="lineSlideDownStagger"
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          {longText}
        </TextAnimateOnScroll>
      </section>

      {/* Add some extra space at the bottom */}
      <div className="h-screen"></div>

      {/* Section 9: Line Slide Up */}
    </main>
  );
}
