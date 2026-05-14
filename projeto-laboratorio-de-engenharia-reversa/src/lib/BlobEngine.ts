/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface Point {
  x: number;
  y: number;
}

/**
 * Pseudo-random generator based on a seed string/number
 */
const createRandom = (seed: number) => {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
};

/**
 * Generates an SVG path data string for a blob with C1 continuity.
 */
export const generateBlobPath = (
  complexity: number,
  contrast: number,
  seed: number
): string => {
  const rand = createRandom(seed);
  const center = 100;
  const baseRadius = 60;
  const points: Point[] = [];

  // Generate points
  for (let i = 0; i < complexity; i++) {
    const angle = (i / complexity) * Math.PI * 2;
    const variance = (contrast / 100) * baseRadius * 0.8;
    const r = baseRadius + (rand() * 2 - 1) * variance;

    points.push({
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    });
  }

  // Smooth path generation using Cubic Beziers
  // To ensure C1 continuity (smooth joins), we use the midpoints of the lines 
  // between points as the actual vertices, and the original points as control points.
  // This is a common technique for circular smooth paths.
  
  const getMidPoint = (p1: Point, p2: Point) => ({
    x: (p1.x + p2.x) / 2,
    y: (p1.y + p2.y) / 2,
  });

  let d = "";
  for (let i = 0; i < complexity; i++) {
    const p0 = points[i];
    const p1 = points[(i + 1) % complexity];
    const p2 = points[(i + 2) % complexity];

    const mid1 = getMidPoint(p0, p1);
    const mid2 = getMidPoint(p1, p2);

    if (i === 0) {
      d += `M ${mid1.x.toFixed(2)},${mid1.y.toFixed(2)}`;
    }

    // Bezier curve to the next midpoint, using p1 as the control point
    // This creates a quadratic-like curve but for SVG we use Q or C. 
    // Actually, a simple way to get very smooth blobs is 
    // using the 'Catmull-Rom to Cubic Bezier' conversion or simple midpoint averaging.
    // Let's use the midpoint approach which is very stable for blobs.
    d += ` Q ${p1.x.toFixed(2)},${p1.y.toFixed(2)} ${mid2.x.toFixed(2)},${mid2.y.toFixed(2)}`;
  }

  return d + " Z";
};
