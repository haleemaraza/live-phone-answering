// PostCSS config for the pre-build Tailwind step only.
//
// It is deliberately NOT named postcss.config.js: Next/Turbopack auto-detects
// that name and spawns a Node worker to run PostCSS during `next build`, and
// that worker crashes on the deploy host ("node process exited before we could
// connect to it"). Tailwind's CLI reads this file via --postcss instead, so the
// CSS is fully compiled — autoprefixer included — before Next ever sees it.
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
