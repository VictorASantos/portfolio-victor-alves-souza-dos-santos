/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from "react";
import { generateBlobPath } from "../lib/BlobEngine.ts";

export const useBlobGenerator = () => {
  const [complexity, setComplexity] = useState(6);
  const [contrast, setContrast] = useState(40);
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 1000000));

  const path = useMemo(() => {
    return generateBlobPath(complexity, contrast, seed);
  }, [complexity, contrast, seed]);

  const randomize = () => {
    setSeed(Math.floor(Math.random() * 1000000));
  };

  return {
    complexity,
    contrast,
    seed,
    path,
    setComplexity,
    setContrast,
    randomize
  };
};
