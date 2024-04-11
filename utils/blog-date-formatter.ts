/**
 * This utility function formats a date from YYYY-MM-DD into a human-readable format for the blog.
 */
export const formatBlogDate = (dateString: string): string => {
	const date = new Date(dateString);

	// Define options for the Intl.DateTimeFormat constructor
	const options: Intl.DateTimeFormatOptions = {
		year: "2-digit",
		month: "long",
		day: "numeric",
	};

	// Create a formatter using the user's locale and the defined options
	const formatter = new Intl.DateTimeFormat("en-US", options);

	// Format the date
	let formattedDate = formatter.format(date);

	// Add the "th" suffix. Adjust this part for 1st, 2nd, 3rd, etc., if necessary.
	const dayOfMonth = date.getDate();
	let suffix = "th";
	switch (dayOfMonth) {
		case 1:
		case 21:
		case 31:
			suffix = "st";
			break;
		case 2:
		case 22:
			suffix = "nd";
			break;
		case 3:
		case 23:
			suffix = "rd";
			break;
	}

	// Replace the comma and day number with the day and its correct suffix
	formattedDate = formattedDate.replace(
		/,\s\d+/,
		`${suffix}, ‘${date.getFullYear() - 2000}`
	);

	return formattedDate;
};
