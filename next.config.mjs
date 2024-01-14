/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  output: "export",
  images: {
    loader: "akamai",
    path: "",
  },
  // assetPrefix: "./",
  basePath: "",
};

export default nextConfig;
