"use client";

import { motion } from "motion/react";

export function EditorPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative w-full max-w-5xl mx-auto"
    >
      {/* Editor shell */}
      <div className="relative rounded-xl border border-border/60 bg-card overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/40 bg-card">
          <div className="flex items-center gap-3">
            {/* Logo placeholder */}
            <div className="w-6 h-6 rounded-md bg-primary/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-sm bg-primary/60" />
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded text-muted-foreground/40">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-full h-full">
                  <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="w-5 h-5 rounded text-muted-foreground/40">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-full h-full">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Pill>4:3</Pill>
            <Pill>Animate</Pill>
            <Pill accent>+ Add Slide</Pill>
            <Pill accent>Export Video</Pill>
            <Pill>Copy</Pill>
            <PillButton>Save</PillButton>
          </div>
        </div>

        {/* Main editor area */}
        <div className="flex" style={{ height: 420 }}>
          {/* Left sidebar */}
          <div className="w-52 border-r border-border/40 bg-card flex-shrink-0 overflow-hidden">
            {/* Tabs */}
            <div className="flex items-center gap-1 px-3 pt-3 pb-2">
              <SidebarTab active>Design</SidebarTab>
              <SidebarTab>BG</SidebarTab>
              <SidebarTab>Layers</SidebarTab>
            </div>

            {/* Sections */}
            <div className="px-3 space-y-4 mt-2">
              <SidebarSection title="ADD TWEET" />
              <SidebarSection title="ADD CODE" />

              <div>
                <p className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-wider mb-2">Stickers</p>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 border border-border/30">
                  <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                  </div>
                  <span className="text-[11px] text-muted-foreground">Add Image to Canvas</span>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-wider mb-2">Draw & Markup</p>
                <div className="grid grid-cols-3 gap-1.5">
                  {["Arrow", "Curve", "Line", "Rect", "Circle", "Blur"].map((tool) => (
                    <div
                      key={tool}
                      className="flex flex-col items-center gap-1 p-1.5 rounded-md hover:bg-muted/50"
                    >
                      <div className="w-4 h-4 rounded-sm bg-muted-foreground/15" />
                      <span className="text-[9px] text-muted-foreground/70">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-wider mb-2">Color</p>
                <div className="flex flex-wrap gap-1">
                  {[
                    "#ef4444", "#f97316", "#eab308", "#22c55e", "#06b6d4", "#3b82f6",
                    "#a855f7", "#ec4899", "#f43f5e", "#6b7280", "#9ca3af", "#374151",
                  ].map((color) => (
                    <div
                      key={color}
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Canvas area */}
          <div className="flex-1 bg-muted/30 flex items-center justify-center p-6 relative overflow-hidden">
            {/* Canvas content - gradient background with inner screenshot */}
            <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-xl" style={{ aspectRatio: "4/3" }}>
              {/* Gradient background */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, #f97316 0%, #ec4899 40%, #8b5cf6 70%, #3b82f6 100%)",
                }}
              />

              {/* Inner "screenshot" */}
              <div className="absolute inset-6 rounded-lg bg-[#1a1a2e] shadow-2xl overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-[#16162a]">
                  <div className="w-2 h-2 rounded-full bg-red-500/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <div className="w-2 h-2 rounded-full bg-green-500/60" />
                  <div className="ml-3 flex-1 h-4 rounded bg-white/5" />
                </div>
                {/* Content */}
                <div className="p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-primary/40" />
                    <div className="h-2 w-20 rounded-full bg-white/10" />
                    <div className="ml-auto h-2 w-12 rounded-full bg-white/10" />
                  </div>
                  <div className="text-center mt-4 space-y-2">
                    <div className="h-3 w-40 mx-auto rounded-full bg-white/20" />
                    <div className="h-5 w-56 mx-auto rounded-full bg-white/15" />
                    <div className="h-2 w-36 mx-auto rounded-full bg-white/8 mt-3" />
                  </div>
                  <div className="flex justify-center gap-2 mt-4">
                    <div className="h-6 w-20 rounded-md bg-primary/50" />
                    <div className="h-6 w-20 rounded-md bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="w-44 border-l border-border/40 bg-card flex-shrink-0 overflow-hidden">
            <div className="flex items-center gap-1 px-3 pt-3 pb-2">
              <SidebarTab active>3D</SidebarTab>
              <SidebarTab>Motion</SidebarTab>
            </div>

            <div className="px-3 space-y-3 mt-1">
              {/* Zoom/Tilt tabs */}
              <div className="flex rounded-md bg-muted/50 p-0.5">
                <div className="flex-1 text-center text-[10px] py-1 rounded bg-card text-foreground font-medium">Zoom</div>
                <div className="flex-1 text-center text-[10px] py-1 text-muted-foreground">Tilt</div>
              </div>

              {/* Zoom slider */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-muted-foreground">Zoom</span>
                <div className="flex-1 h-0.5 rounded-full bg-muted-foreground/20 relative">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-foreground" />
                </div>
                <span className="text-[10px] text-muted-foreground">100%</span>
              </div>

              {/* Layout presets label */}
              <div>
                <p className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-wider mb-2">Layout Presets</p>
                <p className="text-[10px] text-muted-foreground/50 mb-2">Popular</p>
              </div>

              {/* Preset thumbnails */}
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-full aspect-[4/3] rounded-lg overflow-hidden border border-border/30"
                    style={{
                      background: `linear-gradient(${120 + i * 40}deg, #6366f1 0%, #ec4899 50%, #f97316 100%)`,
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-3/4 h-2/3 rounded bg-black/30" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Pill({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      className={`px-2 py-0.5 rounded text-[10px] font-medium ${
        accent
          ? "bg-primary/15 text-primary"
          : "bg-muted/60 text-muted-foreground"
      }`}
    >
      {children}
    </span>
  );
}

function PillButton({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 rounded-md text-[10px] font-medium bg-primary text-primary-foreground">
      {children}
    </span>
  );
}

function SidebarTab({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <span
      className={`px-2.5 py-1 rounded-md text-[11px] font-medium ${
        active
          ? "bg-muted text-foreground"
          : "text-muted-foreground/60"
      }`}
    >
      {children}
    </span>
  );
}

function SidebarSection({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-1">
      <svg className="w-3 h-3 text-muted-foreground/40" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
      </svg>
      <span className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-wider">{title}</span>
    </div>
  );
}
