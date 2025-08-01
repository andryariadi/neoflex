import { Card } from "./ui/card";

const GenerateProgramSkeleton = () => {
  return (
    <section className="flex items-center gap-8">
      {/* AI CARD */}
      <Card className="w-md bg-card/90 backdrop-blur-sm border overflow-hidden relative">
        <div className="aspect-video flex flex-col items-center justify-center p-6 relative">
          <div className="size-32 bg-gray-200 rounded-full animate-pulse mb-4" />
          <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-2" />
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
          <div className="mt-4 flex items-center gap-2 px-3 py-1 rounded-full bg-card border">
            <div className="w-2 h-2 rounded-full bg-gray-200 animate-pulse" />
            <span className="text-xs text-muted-foreground">Loading AI...</span>
          </div>
        </div>
      </Card>

      {/* USER CARD */}
      <Card className="w-md bg-card/90 backdrop-blur-sm border overflow-hidden relative">
        <div className="aspect-video flex flex-col items-center justify-center p-6 relative">
          <div className="size-32 bg-gray-200 rounded-full animate-pulse mb-4" />
          <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-2" />
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
          <div className="mt-4 flex items-center gap-2 px-3 py-1 rounded-full bg-card border">
            <div className="w-2 h-2 rounded-full bg-gray-200 animate-pulse" />
            <span className="text-xs text-muted-foreground">Loading user...</span>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default GenerateProgramSkeleton;
