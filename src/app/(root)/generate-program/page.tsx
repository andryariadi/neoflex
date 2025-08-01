import GenerateProgram from "@/components/GenerateProgram";

const GenerateProgramPage = async () => {
  return (
    <section className="b-amber-500 min-h-screen w-full max-w-[26rem] md:max-w-[42rem] lg:max-w-[55.5rem] xl:max-w-[60rem] 2xl:max-w-[75rem] mx-auto flex flex-col items-center justify-center gap-10">
      {/* Title */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold font-mono">
          <span>Generate Your </span>
          <span className="text-primary uppercase">Fitness Program</span>
        </h1>
        <p className="text-muted-foreground">Have a voice conversation with our AI assistant to create your personalized plan</p>
      </div>

      {/* AI ASSISTANT SECTION */}
      <GenerateProgram />
    </section>
  );
};

export default GenerateProgramPage;
