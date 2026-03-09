import { Navigation } from "./Navigation";
import { Hero } from "./Hero";
import { HowItWorks } from "./HowItWorks";
import { Footer } from "./Footer";
import { FAQ } from "./FAQ";
import { VideoTestimonials } from "./VideoTestimonials";
import { FinalCTA } from "./FinalCTA";
import { StructuredData } from "./StructuredData";
import { ValueProposition } from "./ValueProposition";
import { BackedBy } from "./BackedBy";
import { MasonryGrid } from "./MasonryGrid";
import { EditorPreview } from "./EditorPreview";

interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
}

interface VideoTestimonial {
  videoId: string;
  startTime?: number;
  endTime?: number;
  title?: string;
  author?: string;
}

interface LandingPageProps {
  heroTitle: string;
  heroSubtitle?: string;
  heroDescription: string;
  ctaLabel?: string;
  ctaHref?: string;
  features?: { title: string; description: string; icon?: string }[];
  featuresTitle?: string;
  howItWorks?: HowItWorksStep[];
  brandName?: string;
  videoTestimonials?: VideoTestimonial[];
  videoTestimonialsTitle?: string;
  valueProposition?: {
    eyebrow?: string;
    headline?: string;
  };
  marqueeText?: string;
}

export function LandingPage({
  heroTitle,
  heroSubtitle,
  heroDescription,
  ctaLabel = "Start Creating",
  ctaHref = "/",
  howItWorks,
  brandName = "Screenshot Studio",
  videoTestimonials,
  videoTestimonialsTitle,
  valueProposition,
}: LandingPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <StructuredData />

      <Navigation ctaLabel="Open Editor" ctaHref={ctaHref} />

      <Hero
        title={heroTitle}
        subtitle={heroSubtitle}
        description={heroDescription}
        ctaLabel={ctaLabel}
        ctaHref={ctaHref}
      />

      {/* Editor Preview */}
      <section className="pb-20 px-6">
        <EditorPreview />
      </section>

      {/* AI-optimized definition section — extractable by ChatGPT, Perplexity, Google AI Overviews */}
      <section className="py-16 sm:py-20 px-6 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight">
            What is Screenshot Studio?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Screenshot Studio is a free, browser-based screenshot editor that
            transforms plain screenshots into professional-quality graphics. It
            offers 100+ gradient backgrounds, Safari and Chrome browser mockups,
            3D perspective effects, animation timelines with 20+ presets, and
            video export in MP4, WebM, and GIF formats. No signup, no
            watermarks, no downloads required.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Built as an open-source alternative to paid tools like Pika Style,
            Shots.so, and CleanShot X, Screenshot Studio is used by developers,
            marketers, and designers to create polished images for social media,
            landing pages, documentation, and presentations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-xl bg-background border border-border">
              <p className="font-medium text-foreground mb-1">Key features</p>
              <p className="text-muted-foreground">
                Gradient backgrounds, browser frames, 3D transforms, text
                overlays, tweet capture, code snippets, animation editor, video
                export
              </p>
            </div>
            <div className="p-4 rounded-xl bg-background border border-border">
              <p className="font-medium text-foreground mb-1">How it works</p>
              <p className="text-muted-foreground">
                Drag and drop any screenshot, choose a style or preset, then
                export as PNG, JPG, or video. Everything runs in your browser
                — nothing is uploaded to a server.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BackedBy />

      <ValueProposition
        eyebrow={valueProposition?.eyebrow}
        headline={valueProposition?.headline}
      />

      <MasonryGrid />

      {howItWorks && howItWorks.length > 0 && (
        <HowItWorks steps={howItWorks} title="How It Works" />
      )}

      {videoTestimonials && videoTestimonials.length > 0 && (
        <VideoTestimonials
          testimonials={videoTestimonials}
          title={videoTestimonialsTitle}
        />
      )}

      <FAQ />

      <FinalCTA
        title="Ready to create?"
        description="Join thousands of creators making beautiful images."
        ctaLabel={ctaLabel}
        ctaHref={ctaHref}
      />

      <Footer brandName={brandName} />
    </div>
  );
}
