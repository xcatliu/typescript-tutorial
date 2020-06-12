import * as path from 'https://deno.land/std@0.56.0/path/mod.ts';
import * as fs from 'https://deno.land/std@0.56.0/fs/mod.ts';
import { green } from 'https://deno.land/std@0.56.0/fmt/colors.ts';

export async function ensureDirAndWriteFileStr(filename: string, content: string) {
  console.log(green('Write'), filename);
  await fs.ensureDir(path.dirname(filename));
  await fs.writeFileStr(filename, content);
}
export async function ensureDirAndCopy(src: string, dest: string, options?: fs.CopyOptions) {
  console.log(green('Copy'), src);
  await fs.ensureDir(path.dirname(dest));
  await fs.copy(src, dest, options);
}
export async function copyPagicFile(pathToPagicRoot: string, dest: string) {
  console.log(green('Copy pagic file'), pathToPagicRoot);
  if (import.meta.url.startsWith('file://')) {
    const src = path.resolve(path.dirname(path.fromFileUrl(import.meta.url)), '../../', pathToPagicRoot);
    await ensureDirAndCopy(src, dest, { overwrite: true });
  } else {
    const res = await fetch(import.meta.url.replace(/\/src\/utils\/mod\.ts$/, `/${pathToPagicRoot}`));
    const content = await res.text();
    await ensureDirAndWriteFileStr(dest, content);
  }
}
