import createJiti from "jiti";
import { fileURLToPath } from "node:url";

const jiti = createJiti(fileURLToPath(import.meta.url));

// Import env files so they can be validated during build
jiti("./env");

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
