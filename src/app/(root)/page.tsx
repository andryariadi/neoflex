import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default async function HomePage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <section className="b-sky-500 min-h-screen w-full max-w-[75rem] mx-auto grid grid-cols-1 lg:grid-cols-12 items-center pt-10">
      {/* Left Side */}
      <section className="b-amber-500 relative lg:col-span-8 h-full space-y-8">
        {/* CORNER DECARATION */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2" />

        <div className="b-rose-700 space-y-8 pt-10">
          {/* Title */}
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

          {/* Description */}
          <p className="text-lg text-muted-foreground w-2/3">Talk to our AI assistant and get personalized diet plans and workout routines designed just for you</p>
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

      {/* Right Side */}
      <section className="bg-green-500 lg:col-span-4">andry</section>
    </section>
  );
}
