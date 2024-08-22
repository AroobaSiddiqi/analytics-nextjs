/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "st-media-bucket.s3.us-east-2.amazonaws.com",
      "news.stockstelegraph.com",
    ],
  },
};

export default nextConfig;
