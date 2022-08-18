/** @type {import("next").NextConfig} */
const config = (phase) => ({
  reactStrictMode: true,
  assetPrefix:
    phase === "phase-production-server" ? "http://localhost:3006" : undefined,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff2?|png|jpg)$/,
      type: "asset",
      generator: {
        filename: `static/assets/[name].[contenthash:8][ext]`,
      },
    });
    return config;
  },
});

module.exports = config;
