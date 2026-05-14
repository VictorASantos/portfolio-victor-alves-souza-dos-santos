/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const copyToClipboard = (svgCode: string) => {
  navigator.clipboard.writeText(svgCode);
};

export const downloadSVG = (svgCode: string, seed: number) => {
  const blob = new Blob([svgCode], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `blob-${seed}.svg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
