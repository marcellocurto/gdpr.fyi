export function formatDisplayUrl(url: string | undefined): string {
	if (!url) return "";
	try {
		const parsedUrl = new URL(url);
		return (parsedUrl.hostname + parsedUrl.pathname)
			.replace(/^www\./, "")
			.replace(/\/$/, "");
	} catch (e) {
		return url
			.replace(/^https?:\/\//, "")
			.replace(/^www\./, "")
			.replace(/\/$/, "");
	}
}
