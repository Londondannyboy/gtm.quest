import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // SEO-optimized URL redirects
      {
        source: "/london",
        destination: "/fractionaljobsuk?location=London",
        permanent: true,
      },
      {
        source: "/jobs",
        destination: "/fractionaljobsuk",
        permanent: true,
      },
      {
        source: "/executive-jobs",
        destination: "/fractionaljobsuk",
        permanent: true,
      },
      {
        source: "/remote-jobs",
        destination: "/fractionaljobsuk?remote=true",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  images: {
    unoptimized: true, // For Vercel deployment
  },
};

export default nextConfig;
