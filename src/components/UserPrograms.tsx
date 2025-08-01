import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Dumbbell, Sparkles, Users, Clock, AppleIcon, ShieldIcon } from "lucide-react";
import { USER_PROGRAMS } from "@/constants";
import Image from "next/image";

const UserPrograms = () => {
  return (
    <section className="w-full max-w-[26rem] md:max-w-[42rem] lg:max-w-[55.5rem] xl:max-w-[60rem] 2xl:max-w-[63rem] mx-auto px-3 md:px-0 py-20">
      {/* PROGRAM TIMELINE */}
      <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg overflow-hidden mb-16">
        {/* HEADER BAR */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-background/70">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
            <span className="text-sm text-primary font-medium">Program Gallery</span>
          </div>
          <div className="text-sm text-muted-foreground">Featured Plans</div>
        </div>

        {/* HEADER CONTENT */}
        <div className="p-8 text-center">
          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">AI-Generated </span>
            <span className="text-primary">Programs</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">Explore personalized fitness plans our AI assistant has created for other users</p>

          {/* STATS */}
          <div className="flex items-center justify-center gap-5 md:gap-16 mt-10 font-mono">
            <div className="flex flex-col items-center">
              <p className="text-2xl md:text-3xl text-primary">500+</p>
              <p className="text-xs md:text-sm text-muted-foreground text-nowrap uppercase tracking-wide mt-1">PROGRAMS</p>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="flex flex-col items-center">
              <p className="text-2xl md:text-3xl text-primary">3min</p>
              <p className="text-xs md:text-sm text-muted-foreground text-nowrap uppercase tracking-wide mt-1">CREATION TIME</p>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="flex flex-col items-center">
              <p className="text-2xl md:text-3xl text-primary">100%</p>
              <p className="text-xs md:text-sm text-muted-foreground text-nowrap uppercase tracking-wide mt-1">PERSONALIZED</p>
            </div>
          </div>
        </div>
      </div>

      {/* PROGRAM CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {USER_PROGRAMS.map((program) => (
          <Card key={program.id} className="bg-card/90 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors overflow-hidden">
            {/* Card Bar */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-background/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm text-primary">USER.{program.id}</span>
              </div>
              <div className="text-sm text-muted-foreground">{program.fitness_level.toUpperCase()}</div>
            </div>

            <CardHeader className="pt-6 px-5">
              {/* USER INFO */}
              <div className="b-fuchsia-500 flex items-center gap-4 mb-4">
                <div className="h-16 w-16 rounded-full overflow-hidden border border-border">
                  {/* AVATAR */}
                  <Image src={program.profilePic} alt={`${program.first_name}`} width={64} height={64} className="object-cover" />
                </div>

                {/* INFO */}
                <div>
                  <CardTitle className="text-xl text-foreground">
                    {program.first_name}
                    <span className="text-primary">.exe</span>
                  </CardTitle>
                  <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                    <Users className="h-4 w-4" />
                    {program.age}y • {program.workout_days}d/week
                  </div>
                </div>
              </div>

              {/* FITNESS GOAL */}
              <div className="flex justify-between items-center gap-4">
                <div className="px-3 py-1 bg-primary/10 rounded border border-primary/20 text-sm text-primary flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  {program.fitness_goal}
                </div>
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  v3.5
                </div>
              </div>
            </CardHeader>

            <CardContent className="px-5">
              {/* PROGRAM DETAILS */}
              <div className="min-h-60 space-y-5 pt-2">
                {/* WORKOUT PLAN */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-primary/10 text-primary mt-0.5">
                    <Dumbbell className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-foreground">{program.workout_plan.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{program.equipment_access}</p>
                  </div>
                </div>

                {/* DIET PLAN */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-secondary/10 text-secondary mt-0.5">
                    <AppleIcon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-foreground">{program.diet_plan.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">System optimized nutrition</p>
                  </div>
                </div>

                {/* SAFETY PROTOCOL */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-primary/10 text-primary mt-0.5">
                    <ShieldIcon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-foreground">AI Safety Protocols</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Protection systems enabled</p>
                  </div>
                </div>
              </div>

              {/* PROGRAM DESCRIPTION */}
              <div className="mt-5 pt-5 border-t border-border">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  <span className="text-primary">&gt; </span>
                  {program.workout_plan.description}
                </p>
              </div>
            </CardContent>

            <CardFooter className="px-5 pt-4 border-t border-border">
              <Link href={`/programs/${program.id}`} className="w-full">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  View Program Details
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* CTA section */}
      <div className="mt-16 text-center">
        <Link href="/generate-program">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg">
            Generate Your Program
            <Sparkles className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        <p className="text-muted-foreground mt-4">Join 500+ users with AI-customized fitness programs</p>
      </div>
    </section>
  );
};

export default UserPrograms;
