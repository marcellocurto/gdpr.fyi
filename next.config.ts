import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import remarkGfm from "remark-gfm";
import withExportImages from "next-export-optimize-images";

const nextConfig: NextConfig = {
	output: "export",
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
	options: {
		remarkPlugins: [remarkGfm],
	},
});

export default withExportImages(withMDX(nextConfig));
