import Image from "next-export-optimize-images/image";
import { ImageProps } from "next/image";

export const MDXComponents = {
	Image: (props: ImageProps) => <Image {...props} />,
};
