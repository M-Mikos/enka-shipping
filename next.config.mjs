import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [828, 1080, 1200, 1920, 2048],
  },
};

export default withNextIntl(nextConfig);
