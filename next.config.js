/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
  images: {
    domains: [
      "images.unsplash.com",
      "via.placeholder.com",
      "private.joomeo.com",
    ],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy:
      "default-src 'self'; font-src 'self' fonts.gstatic.com fonts.googleapis.com; script-src 'none'; sandbox;",
  },
  // En-têtes de sécurité renforcés
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: [
          // Protection XSS
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          // Prévention du clickjacking
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // Protection contre le sniffing MIME
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Politique de référent stricte
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Permissions restrictives
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()",
          },
          // Content Security Policy strict
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com fonts.googleapis.com; img-src 'self' data: images.unsplash.com; connect-src 'self' https://api.emailjs.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
          },
          // HSTS (HTTPS Strict Transport Security)
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          // Protection contre les attaques de timing
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          // Cache control sécurisé
          {
            key: "Cache-Control",
            value: "public, max-age=3600, must-revalidate",
          },
        ],
      },
      // Cache optimisé pour les assets statiques
      {
        source: "/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache pour les images
      {
        source: "/_next/image(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  // Optimisations de performance
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  compress: true,
  poweredByHeader: false,
  // Optimisations webpack avancées
  webpack: (config, { dev, isServer }) => {
    // Optimisation des bundles
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
            priority: 10,
          },
          common: {
            name: "common",
            minChunks: 2,
            chunks: "all",
            enforce: true,
            priority: 5,
          },
          framerMotion: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: "framer-motion",
            chunks: "all",
            priority: 20,
          },
        },
      };

      // Optimisation des modules
      config.optimization.moduleIds = "deterministic";
      config.optimization.chunkIds = "deterministic";
    }

    // Optimisation des images
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/images/",
          outputPath: "static/images/",
          esModule: false,
        },
      },
    });

    // Minification avancée
    if (!dev) {
      config.optimization.minimize = true;
    }

    return config;
  },
  // Redirections de sécurité
  redirects: async () => {
    return [
      {
        source: "/admin/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/api/admin/:path*",
        destination: "/api/not-found",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
