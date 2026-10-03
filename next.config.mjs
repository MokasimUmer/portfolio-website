/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  devIndicators: {
    position: 'bottom-right',
  },
};

export default nextConfig;
