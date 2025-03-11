import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [400, 600, 750, 1080, 1280, 1920, 2560],
  },
};

export default withNextIntl(nextConfig);
