import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: false,
    },
  },
};

export default nextConfig;
