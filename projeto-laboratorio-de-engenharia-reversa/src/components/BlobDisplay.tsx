/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

interface BlobDisplayProps {
  path: string;
  color: string;
  mode: "filled" | "outline";
}

export const BlobDisplay = ({ path, color, mode }: BlobDisplayProps) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full max-w-[500px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d={path}
          fill={mode === "filled" ? color : "transparent"}
          stroke={mode === "outline" ? color : "none"}
          strokeWidth={mode === "outline" ? 4 : 0}
          initial={false}
          animate={{ 
            d: path, 
            fill: mode === "filled" ? color : "transparent",
            stroke: mode === "outline" ? color : "none"
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 12,
            mass: 0.8
          }}
        />
      </svg>
    </div>
  );
};
