import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = "C:/Pet/img";
const OUT = "C:/Pet/petcare/public/images";

const SOURCES = {
  running: `${SRC}/WhatsApp Image 2026-09-06 at 00.47.01 (1).jpeg`,
  posterClean: `${SRC}/WhatsApp Image 2026-09-06 at 00.47.01 (2).jpeg`,
  waving: `${SRC}/WhatsApp Image 2026-09-06 at 00.47.01 (3).jpeg`,
  posterAlt: `${SRC}/WhatsApp Image 2026-09-06 at 00.47.01 (4).jpeg`,
  backyard: `${SRC}/WhatsApp Image 2026-09-06 at 00.47.01.jpeg`,
};

await mkdir(`${OUT}/gallery`, { recursive: true });
await mkdir(`${OUT}/mockups`, { recursive: true });

async function make({ from, out, extract, width, height, quality = 84, fit = "cover" }) {
  const input = sharp(from).rotate();
  const meta = await input.metadata();
  let pipeline = sharp(from).rotate();

  if (extract) {
    const left = Math.max(0, Math.round(extract.left));
    const top = Math.max(0, Math.round(extract.top));
    const w = Math.min(Math.round(extract.width), meta.width - left);
    const h = Math.min(Math.round(extract.height), meta.height - top);
    pipeline = pipeline.extract({ left, top, width: w, height: h });
  }

  if (width || height) {
    pipeline = pipeline.resize({
      width,
      height,
      fit,
      withoutEnlargement: false,
    });
  }

  const outPath = path.join(OUT, out);
  await pipeline.jpeg({ quality, mozjpeg: true, chromaSubsampling: "4:4:4" }).toFile(outPath);
  const finalMeta = await sharp(outPath).metadata();
  console.log(`${out.padEnd(34)} ${finalMeta.width}x${finalMeta.height}`);
}

// Hero, full running shot
await make({ from: SOURCES.running, out: "hero-marshmallow.jpg", width: 1600, quality: 86 });

// Mascot portrait, the waving pom
await make({
  from: SOURCES.waving,
  out: "mascot-marshmallow.jpg",
  extract: { left: 252, top: 52, width: 398, height: 516 },
  width: 880,
  quality: 86,
});

// Gallery tiles
await make({ from: SOURCES.running, out: "gallery/g1.jpg", width: 1100, quality: 82 });
await make({
  from: SOURCES.running,
  out: "gallery/g2.jpg",
  extract: { left: 452, top: 66, width: 424, height: 424 },
  width: 640,
});
await make({
  from: SOURCES.waving,
  out: "gallery/g3.jpg",
  extract: { left: 250, top: 70, width: 470, height: 470 },
  width: 640,
});
await make({
  from: SOURCES.waving,
  out: "gallery/g4.jpg",
  extract: { left: 322, top: 150, width: 330, height: 330 },
  width: 560,
});
await make({
  from: SOURCES.posterClean,
  out: "gallery/g5.jpg",
  extract: { left: 495, top: 14, width: 205, height: 205 },
  width: 500,
});
await make({
  from: SOURCES.running,
  out: "gallery/g6.jpg",
  extract: { left: 250, top: 300, width: 800, height: 540 },
  width: 900,
});

// Phone mockups cropped from the clean poster
await make({
  from: SOURCES.posterClean,
  out: "mockups/mockup-agendado.jpg",
  extract: { left: 12, top: 198, width: 384, height: 968 },
  width: 480,
  quality: 88,
});
await make({
  from: SOURCES.posterClean,
  out: "mockups/mockup-durante.jpg",
  extract: { left: 394, top: 212, width: 392, height: 968 },
  width: 480,
  quality: 88,
});
await make({
  from: SOURCES.posterClean,
  out: "mockups/mockup-relatorio.jpg",
  extract: { left: 792, top: 198, width: 400, height: 968 },
  width: 480,
  quality: 88,
});

console.log("done");
