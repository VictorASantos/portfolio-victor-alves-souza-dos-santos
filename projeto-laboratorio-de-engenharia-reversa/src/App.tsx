/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { useBlobGenerator } from "./hooks/useBlobGenerator.ts";
import { Controls } from "./components/Controls.tsx";
import { BlobDisplay } from "./components/BlobDisplay.tsx";
import { copyToClipboard, downloadSVG } from "./lib/ExportUtils.ts";
import { Twitter } from "lucide-react";

export default function App() {
  const [color, setColor] = useState("#9EF0F0");
  const [mode, setMode] = useState<"filled" | "outline">("filled");
  
  const {
    complexity,
    contrast,
    seed,
    path,
    setComplexity,
    setContrast,
    randomize
  } = useBlobGenerator();

  const getFullSVG = () => {
    return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="${mode === "filled" ? color : "transparent"}" stroke="${mode === "outline" ? color : "none"}" stroke-width="${mode === "outline" ? 4 : 0}" d="${path}" />
</svg>`.trim();
  };

  const handleCopy = () => {
    copyToClipboard(getFullSVG());
  };

  const handleDownload = () => {
    downloadSVG(getFullSVG(), seed);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col items-center">
      {/* Top Banner */}
      <div className="w-full bg-[#FF0066] py-2 px-4 text-center text-white text-sm font-medium">
        Blobmaker is now a part of <a href="https://haikei.app" target="_blank" rel="noopener noreferrer" className="underline font-bold">Haikei.app</a>. Try it out for free!
      </div>

      {/* Header */}
      <header className="w-full max-w-7xl px-8 py-8 flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-[#FF0066] rounded-full flex items-center justify-center text-white font-black text-3xl shadow-lg relative">
            B
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-400 rounded-full border-4 border-white" />
          </div>
          <div>
            <span className="text-slate-500 font-medium">By </span>
            <span className="text-[#FF0066] font-bold">z creative labs</span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-slate-400 font-medium">Share</span>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#1DA1F2] transition-colors"
          >
            <Twitter className="w-6 h-6 fill-current" />
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full flex relative overflow-hidden">
        {/* Background Decorative Waves (Simplified) */}
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-slate-50 opacity-40 pointer-events-none" style={{ borderRadius: '100% 100% 0 0 / 100% 100% 0 0' }} />

        {/* Vertical Dashed lines for structure feel */}
        <div className="absolute inset-0 flex justify-center pointer-events-none opacity-40">
          <div className="h-full w-[1px] vertical-dashed mx-[200px]" />
          <div className="h-full w-[1px] vertical-dashed mx-[200px]" />
        </div>

        <section className="flex-1 flex items-center justify-center p-4 z-10">
           <BlobDisplay path={path} color={color} mode={mode} />
        </section>

        {/* Floating Controls Bar at Bottom */}
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 z-50">
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-slate-50 p-6 flex items-center justify-center">
             <Controls
               complexity={complexity}
               contrast={contrast}
               color={color}
               mode={mode}
               setComplexity={setComplexity}
               setContrast={setContrast}
               setColor={setColor}
               setMode={setMode}
               onRandomize={randomize}
               onDownload={handleDownload}
               onCopy={handleCopy}
             />
          </div>
        </div>
      </main>

      <footer className="w-full pb-8 pointer-events-none" />
    </div>
  );
}
