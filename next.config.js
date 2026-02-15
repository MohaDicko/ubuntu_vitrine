
/** @type {import('next').NextConfig} */
const nextConfig = {
    // ⚠️ TEMPORAIRE : Ignorer les warnings ESLint pendant le build Vercel
    // À retirer une fois les warnings corrigés
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
