import fs from 'fs';
import path from 'path';

export function writeOutputToDisk(output, filename) {
  const jsonOutput = JSON.stringify(output, null, 2);
  try {
    fs.writeFileSync(path.resolve('dist', filename), jsonOutput, 'utf8');
    console.log(`Successfully wrote ${filename} to disk!`);
  } catch (e) {
    console.log(`Error writing file to disk: ${filename}`, e);
  }
}
