import ResumeBuilder from "@/components/ResumeBuilder";

export default function UnhingedPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Dark Horizon Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
        }}
      />
      {/* Your Content/Components */}
      <ResumeBuilder />
    </div>
  );
}
