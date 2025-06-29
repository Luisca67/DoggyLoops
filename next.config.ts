import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Configuración para mejorar la hidratación
  reactStrictMode: true,
  // Configuración para ser más tolerante con extensiones del navegador
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Configuración para imágenes
  images: {
    unoptimized: false,
    domains: [],
    remotePatterns: [],
  },
  // Configuración para mejorar la resolución de módulos
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": ".",
    };

    // Excluir archivos del backend del build del frontend
    config.module.rules.push({
      test: /\.ts$/,
      exclude: /backend/,
    });

    return config;
  },
  // Excluir archivos del backend del build
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  distDir: ".next",
};

export default nextConfig;
