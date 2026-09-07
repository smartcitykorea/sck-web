import type { NextConfig } from "next";

// 배포 위치에 따라 하위 경로가 달라진다. lib/asset-path.ts 와 같은 값을 참조한다.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;