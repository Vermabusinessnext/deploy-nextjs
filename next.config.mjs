/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.BUILD_ENV_DEV || process.env.BUILD_ENV_QA || process.env.BUILD_ENV_SA
};

export default nextConfig;
