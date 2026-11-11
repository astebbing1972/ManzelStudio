import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  // Inline the site stylesheet (~11 KB) into each page instead of a
  // render-blocking <link>: PageSpeed flagged it as the only render-blocking
  // request (~340-380 ms). Same change as the SSOS site (Nov 2026).
  experimental: {
    inlineCss: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "manzelstudio.com" }],
        destination: "https://www.manzelstudio.com.au/:path*",
        statusCode: 301,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.manzelstudio.com" }],
        destination: "https://www.manzelstudio.com.au/:path*",
        statusCode: 301,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "manzelstudio.netlify.app" }],
        destination: "https://www.manzelstudio.com.au/:path*",
        statusCode: 301,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048, 3840],
    qualities: [70, 75],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.manzelstudio.com.au",
      },
    ],
  },
};

export default nextConfig;
