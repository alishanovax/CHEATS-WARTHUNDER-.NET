/**
 * Build multi-size favicon.ico from existing PNG buffers (no sharp dependency).
 * Usage: node scripts/compose-favicon-ico.mjs public/favicon-16.png public/favicon-32.png [out.ico]
 */
import fs from 'node:fs';
import path from 'node:path';

const [a, b, outArg] = process.argv.slice(2);
if (!a || !b) {
  console.error('Usage: node scripts/compose-favicon-ico.mjs <16px.png> <32px.png> [out.ico]');
  process.exit(1);
}
const out = outArg ?? path.join(path.dirname(a), 'favicon.ico');

function pngSize(buf) {
  return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
}

function encodeIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6 + count * 16;
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  let o = 6;
  let dataOffset = headerSize;
  const parts = [header];

  for (const buf of pngBuffers) {
    const { w, h } = pngSize(buf);
    header.writeUInt8(w >= 256 ? 0 : w, o);
    header.writeUInt8(h >= 256 ? 0 : h, o + 1);
    header.writeUInt8(0, o + 2);
    header.writeUInt8(0, o + 3);
    header.writeUInt16LE(1, o + 4);
    header.writeUInt16LE(32, o + 6);
    header.writeUInt32LE(buf.length, o + 8);
    header.writeUInt32LE(dataOffset, o + 12);
    o += 16;
    dataOffset += buf.length;
    parts.push(buf);
  }

  return Buffer.concat(parts);
}

const png16 = fs.readFileSync(a);
const png32 = fs.readFileSync(b);
const ico = encodeIco([png16, png32]);
fs.writeFileSync(out, ico);
console.log('wrote', out, ico.length);
