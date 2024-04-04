/** @type {import('next').NextConfig} */
const nextConfig = {
	type: "module",
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.graphassets.com",
				port: "",
			},
		],
	},
};

module.exports = nextConfig;
