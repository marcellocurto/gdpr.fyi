import React from "react";

export function PageLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="prose prose-invert mx-auto flex max-w-7xl flex-col gap-8 p-12">{children}</div>
	);
}

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
	children: React.ReactNode;
}

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
	children: React.ReactNode;
}

export function PageTitle({ children, ...props }: HeadingProps) {
	return (
		<H1 className="text-4xl font-bold" {...props}>
			{children}
		</H1>
	);
}

export function H1({ children, ...props }: HeadingProps) {
	return <h1 {...props}>{children}</h1>;
}

export function H2({ children, ...props }: HeadingProps) {
	return <h2 {...props}>{children}</h2>;
}

export function H3({ children, ...props }: HeadingProps) {
	return <h3 {...props}>{children}</h3>;
}

export function P({ children, ...props }: ParagraphProps) {
	return <p {...props}>{children}</p>;
}
