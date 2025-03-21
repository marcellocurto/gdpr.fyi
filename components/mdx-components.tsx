import Image, { ImageProps } from "next/image";

export const MDXComponents = {
	Image: (props: ImageProps) => <Image {...props} />,
};
