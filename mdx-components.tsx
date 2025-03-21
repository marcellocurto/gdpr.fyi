import { MDXComponents } from "@/components/mdx-components";
import { type MDXComponents as MDXComponentsType } from "mdx/types";

export function useMDXComponents(components: MDXComponentsType) {
	return {
		...components,
		...MDXComponents,
	};
}
