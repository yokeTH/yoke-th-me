import fs from "fs";
import path from "path";
import katex from "katex";

export function renderLatex(fileName: string): string {
  const filePath = path.join(process.cwd(), "public", "texfiles", fileName); // Adjust the path to your tex file location
  const texContent = fs.readFileSync(filePath, "utf-8");

  try {
    return katex.renderToString(texContent, {
      throwOnError: false,
    });
  } catch (err) {
    console.error("Error rendering LaTeX:", err);
    return `<p>Error rendering LaTeX content</p>`;
  }
}
