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
			{ source: "/resume.pdf", destination: "/cv.pdf", permanent: true },
		];
	},
	async rewrites() {
		// the CV is generated from the site's own content
		return [{ source: "/cv.pdf", destination: "/api/cv" }];
	},
};

module.exports = withMDX(nextConfig);
