/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { RefreshCw, Download, Copy, Check, Circle, CloudDownload, Code2, Dice5, Share2, Hexagon, Component } from "lucide-react";
import { useState } from "react";

interface ControlsProps {
  complexity: number;
  contrast: number;
  color: string;
  mode: "filled" | "outline";
  setComplexity: (val: number) => void;
  setContrast: (val: number) => void;
  setColor: (val: string) => void;
  setMode: (val: "filled" | "outline") => void;
  onRandomize: () => void;
  onDownload: () => void;
  onCopy: () => void;
}

const TriangleNodes = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-600">
    <circle cx="12" cy="6" r="1.5" fill="currentColor" />
    <circle cx="6" cy="18" r="1.5" fill="currentColor" />
    <circle cx="18" cy="18" r="1.5" fill="currentColor" />
    <path d="M12 6L6 18H18L12 6" />
  </svg>
);

const PentagonNodes = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-600">
    <circle cx="12" cy="4" r="1.5" fill="currentColor" />
    <circle cx="4" cy="10" r="1.5" fill="currentColor" />
    <circle cx="7" cy="19" r="1.5" fill="currentColor" />
    <circle cx="17" cy="19" r="1.5" fill="currentColor" />
    <circle cx="20" cy="10" r="1.5" fill="currentColor" />
    <path d="M12 4L4 10L7 19H17L20 10L12 4" />
  </svg>
);

const OrganicBlob = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-600">
    <path d="M12 4C9 4 7 7 5 10C3 13 4 17 8 19C11 21 13 18 16 19C19 20 22 17 21 13C20 9 17 4 12 4Z" />
  </svg>
);

export const Controls = ({
  complexity,
  contrast,
  color,
  mode,
  setComplexity,
  setContrast,
  setColor,
  setMode,
  onRandomize,
  onDownload,
  onCopy,
}: ControlsProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-row items-center gap-6 lg:gap-10 w-full overflow-x-auto lg:overflow-visible no-scrollbar py-2">
      {/* HEX Input Group */}
      <div className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-2xl border border-slate-100 min-w-[160px]">
        <input
          type="text"
          value={color.toUpperCase()}
          onChange={(e) => setColor(e.target.value)}
          className="bg-transparent text-sm font-bold text-slate-700 tracking-tight focus:outline-none uppercase w-20"
          maxLength={7}
        />
        <label htmlFor="color-picker" className="cursor-pointer relative">
          <div 
            className="w-8 h-8 rounded-full border-4 border-white shadow-sm"
            style={{ backgroundColor: color }}
          />
          <input
            type="color"
            id="color-picker"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-0 h-0 opacity-0 absolute"
          />
        </label>
      </div>

      {/* Complexity Slider */}
      <div className="flex items-center gap-3 flex-1 min-w-[200px]">
        <TriangleNodes />
        <input
          type="range"
          min="3"
          max="12"
          value={complexity}
          onChange={(e) => setComplexity(parseInt(e.target.value))}
          className="flex-1 h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#FF0066] focus:outline-none"
        />
        <PentagonNodes />
      </div>

      {/* Mode / Contrast Section */}
      <div className="flex items-center gap-3 flex-1 min-w-[200px]">
        <button 
          onClick={() => setMode(mode === "filled" ? "outline" : "filled")}
          className="p-1 hover:bg-slate-50 rounded-full transition-colors flex items-center justify-center"
        >
          <Circle className="w-8 h-8 text-slate-600" />
        </button>
        <input
          type="range"
          min="0"
          max="100"
          value={contrast}
          onChange={(e) => setContrast(parseInt(e.target.value))}
          className="flex-1 h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#FF0066] focus:outline-none"
        />
        <OrganicBlob />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <button
          onClick={onDownload}
          className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#FF0066] text-[#FF0066] hover:bg-[#FF0066] hover:text-white transition-all active:scale-90"
          title="Download"
        >
          <CloudDownload className="w-6 h-6" />
        </button>
        <button
          onClick={handleCopy}
          className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#FF0066] text-[#FF0066] hover:bg-[#FF0066] hover:text-white transition-all active:scale-90"
          title="Copy SVG"
        >
          {copied ? <Check className="w-6 h-6" /> : <Code2 className="w-6 h-6" />}
        </button>
        <button
          onClick={onRandomize}
          className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FF0066] text-white shadow-lg hover:shadow-xl hover:bg-[#E6005C] transition-all active:scale-90"
          title="Randomize"
        >
          <Dice5 className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};
