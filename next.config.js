/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize build for Vercel
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        'node_modules/@swc/core-linux-x64-gnu',
        'node_modules/@swc/core-linux-x64-musl',
        'node_modules/@esbuild/linux-x64',
        '.git',
        '*.md',
        'data/**/*'
      ],
    },
  },
  // Reduce build traces
  outputFileTracing: true,
}

module.exports = nextConfig
