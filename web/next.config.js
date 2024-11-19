/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@astroneer/scrapper', '@astroneer/utils'],
  output: "standalone"
}

module.exports = nextConfig
