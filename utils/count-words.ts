export const countWordsInMDX = (mdxContent: string): number => {
	// Remove HTML/JSX tags
	let plainText = mdxContent.replace(/<\/?[^>]+(>|$)/g, "");

	// Remove JSX expressions
	plainText = plainText.replace(/\{[^}]+\}/g, "");

	// Remove Markdown links and images
	plainText = plainText.replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1");

	// Remove thematic breaks (---, ***, ___), list items, blockquotes
	plainText = plainText.replace(
		/^(\s*[-*]|\s*>|\s*---|\s*\*\*\*|\s*___\s*)/gm,
		""
	);

	// Remove additional Markdown syntax (bold, italic, inline code)
	plainText = plainText.replace(/[_*`#>]/g, "");

	// Remove excess whitespace
	plainText = plainText.trim();

	// Split by whitespace to get words and filter out empty strings
	const words = plainText.split(/\s+/).filter((word) => word.length > 0);

	return words.length;
};
