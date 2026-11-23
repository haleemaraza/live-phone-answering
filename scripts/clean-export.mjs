// Next's static export writes an RSC payload (.txt) beside every route so the
// client router can prefetch segments. Every <Link> here sets prefetch={false},
// so nothing ever requests them — and they cause two real problems:
//
//   1. ~3.4 MB of dead files to upload to Hostinger on every deploy.
//   2. Each route gets a directory (out/about-us/) next to its page
//      (out/about-us.html). Apache's DirectoryIndex then matches the directory
//      for /about-us and the clean-URL rewrite in .htaccess never fires.
//
// This runs after `next build` and removes them, along with any directory left
// empty afterwards. robots.txt is kept.
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Resolve from this file rather than process.cwd(): a build runner can invoke
// the script from a different working directory than the one `next build` ran
// in, and the old cwd-only lookup turned that into a failed deploy.
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const CANDIDATES = [path.join(ROOT, 'out'), path.join(process.cwd(), 'out')]
const OUT = CANDIDATES.find((dir) => fs.existsSync(dir))
const KEEP = new Set(['robots.txt'])

let removedFiles = 0
let removedBytes = 0
let removedDirs = 0

function clean(dir) {
  if (!fs.existsSync(dir)) return true

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      clean(full)
      if (fs.readdirSync(full).length === 0) {
        fs.rmdirSync(full)
        removedDirs++
      }
      continue
    }

    if (entry.name.endsWith('.txt') && !KEEP.has(entry.name)) {
      removedBytes += fs.statSync(full).size
      fs.unlinkSync(full)
      removedFiles++
    }
  }
}

// Cleanup must never fail a build that otherwise succeeded. If out/ is missing
// the deploy still has `next build`'s output; print what is on disk so the
// build log says where the export actually went, then exit cleanly.
if (!OUT) {
  const list = (dir) => {
    try {
      return fs
        .readdirSync(dir, { withFileTypes: true })
        .map((e) => (e.isDirectory() ? e.name + '/' : e.name))
        .join(' ')
    } catch (err) {
      return `(cannot read: ${err.code})`
    }
  }
  console.warn('clean-export: no out/ directory found, skipping cleanup.')
  console.warn('  looked in : ' + CANDIDATES.join('  '))
  console.warn('  cwd       : ' + process.cwd())
  console.warn('  project   : ' + ROOT)
  console.warn('  contents  : ' + list(ROOT))
  console.warn('  .next     : ' + list(path.join(ROOT, '.next')))
  process.exit(0)
}

clean(OUT)

console.log(
  `clean-export: removed ${removedFiles} RSC payloads (${Math.round(removedBytes / 1024)} KB) and ${removedDirs} empty directories.`
)
