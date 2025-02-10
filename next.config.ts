import fs from "fs";
import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    // Log files in the src directory
    console.log("Files in src:", fs.readdirSync(path.resolve(__dirname, "src")));
    return config;
  },
};

export default nextConfig;
