import TerminalOverlay from "@/components/TerminalOverlay";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="min-h-screen w-full max-w-[26rem] md:max-w-[42rem] lg:max-w-[55.5rem] xl:max-w-[60rem] 2xl:max-w-[75rem] mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-0 py-10">
      {/* LEFT SIDE */}
      <section className="relative lg:col-span-7 h-full space-y-8">
        {/* CORNER DECARATION */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2" />

        <div className="space-y-8 pt-10">
          {/* TITLE */}
          <h1 className="text-5xl md:text-6xl lg:text-[3.5rem] font-bold tracking-tight">
            <div>
              <span className="text-foreground">Transform</span>
            </div>
            <div>
              <span className="text-primary">Your Body</span>
            </div>
            <div className="pt-2">
              <span className="text-foreground">With Advanced</span>
            </div>
            <div className="pt-2">
              <span className="text-foreground">AI</span>
              <span className="text-primary"> Technology</span>
            </div>
          </h1>

          {/* SEPERATOR LINE */}
          <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>

          {/* DESCRIPTION */}
          <p className="text-lg text-muted-foreground w-full md:w-2/3">Talk to our AI assistant and get personalized diet plans and workout routines designed just for you</p>
        </div>

        {/* STATS */}
        <div className="flex items-center gap-10 pb-6 font-mono">
          <div className="flex flex-col">
            <div className="text-2xl text-primary">500+</div>
            <div className="text-xs uppercase tracking-wider">ACTIVE USERS</div>
          </div>
          <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
          <div className="flex flex-col">
            <div className="text-2xl text-primary">3min</div>
            <div className="text-xs uppercase tracking-wider">GENERATION</div>
          </div>
          <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
          <div className="flex flex-col">
            <div className="text-2xl text-primary">100%</div>
            <div className="text-xs uppercase tracking-wider">PERSONALIZED</div>
          </div>
        </div>

        {/* BUTTON */}
        {/* <div className="bg-rose-600 flex flex-col sm:flex-row gap-4 pt-6"> */}
        <Button size="lg" asChild className="overflow-hidden bg-primary text-primary-foreground px-8 py-6 text-lg font-medium">
          <Link href="/generate-program" className="flex items-center font-mono">
            Build Your Program
            <ArrowRightIcon className="ml-2 size-5" />
          </Link>
        </Button>
        {/* </div> */}
      </section>

      {/* RIGHT SIDE */}
      <section className="relative lg:col-span-5">
        {/* CORNER PIECES */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-3 left-0 w-16 h-16 border-l-2 border-t-2 border-border" />
          <div className="absolute -top-3 right-0 w-16 h-16 border-r-2 border-t-2 border-border" />
          <div className="absolute -bottom-3 left-0 w-16 h-16 border-l-2 border-b-2 border-border" />
          <div className="absolute -bottom-3 right-0 w-16 h-16 border-r-2 border-b-2 border-border" />
        </div>

        {/* Hero Image */}
        <div className="w-full max-w-[22rem] mx-auto">
          {/* IMAGE CONTAINER */}
          <div className="b-amber-500 relative w-full h-[37rem] overflow-hidden rounded-lg bg-cyber-black">
            <Image src="/hero.png" alt="AI Fitness Coach" fill className="object-cover " />

            {/* SCAN LINE */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_calc(50%-1px),var(--cyber-glow-primary)_50%,transparent_calc(50%+1px),transparent_100%)] bg-[length:100%_8px] animate-scanline pointer-events-none" />

            {/* DECORATIONS ON TOP THE IMAGE */}
            <div className="absolute inset-0 pointer-events-none">
              {/* OUTER CIRCLE */}
              <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-primary/40 rounded-full" />

              {/* TARGET LINES */}
              <div className="absolute top-1/2 left-0 w-1/4 h-px bg-primary/50" />
              <div className="absolute top-1/2 right-0 w-1/4 h-px bg-primary/50" />
              <div className="absolute top-0 left-1/2 h-1/4 w-px bg-primary/50" />
              <div className="absolute bottom-0 left-1/2 h-1/4 w-px bg-primary/50" />
            </div>

            {/* OVERLAY EFFECT */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

            {/* TERMINAL OVERLAY */}
            <TerminalOverlay />
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
