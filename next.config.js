const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.graphassets.com",
				port: "",
			},
			{
				protocol: "https",
				hostname: "us-east-1-shared-usea1-02.graphassets.com",
				port: "",
			},
		],
	},
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	async redirects() {
		return [
			{ source: "/projects", destination: "/writing", permanent: true },
			{ source: "/blog", destination: "/writing", permanent: true },
		];
	},
};

module.exports = withMDX(nextConfig);
