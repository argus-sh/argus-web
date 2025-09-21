import { Dock } from "@/components/magicui/dock";
import { About } from "@/components/sections/about";
import { Comparison } from "@/components/sections/comparison";
import { Evolution } from "@/components/sections/evolution";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Global subtle dot pattern */}
      <DotPattern
        width={48}
        height={48}
        cx={2}
        cy={2}
        cr={1}
        className={cn(
          "absolute inset-0 h-full w-full text-gray-300/30 dark:text-gray-600/30 -z-10",
        )}
      />

      <Dock />
      <main>
        <section id="home">
          <Hero />
        </section>
        <Projects />
        <Comparison />
        <Evolution />
        <About />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
