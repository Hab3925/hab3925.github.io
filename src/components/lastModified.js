import { execSync } from 'child_process';
import path from 'path';

export function getLastModified(relativePath) {
  try {
    const fullPath = path.resolve(process.cwd(), relativePath);
    const output = execSync(`git log -1 --format=%cI -- "${fullPath}"`).toString().trim();
    return output;
  } catch (e) {
    console.error(`Could not get last modified time for ${relativePath}`, e);
    return null;
  }
}
