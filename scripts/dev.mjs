// `next dev` no longer compiles Tailwind: the project has no postcss.config.js,
// because Turbopack spawns a Node worker for PostCSS and that worker crashes on
// the deploy host ("node process exited before we could connect to it").
// Tailwind is compiled by its own CLI instead, so dev runs two processes:
// the CLI in watch mode, and Next.
//
// Spawned through Node rather than with `&` so it works on Windows too.
import { spawn } from 'node:child_process'

const run = (label, args) => {
  const child = spawn('npx', args, { stdio: 'inherit', shell: true })
  child.on('exit', (code) => {
    if (code) console.error(`[${label}] exited with code ${code}`)
    process.exit(code ?? 0)
  })
  return child
}

const tailwind = run('tailwind', [
  'tailwindcss',
  '--postcss',
  './postcss.build.config.js',
  '-i',
  './styles/globals.src.css',
  '-o',
  './app/globals.css',
  '--watch',
])

const next = run('next', ['next', 'dev'])

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => {
    tailwind.kill()
    next.kill()
  })
}
