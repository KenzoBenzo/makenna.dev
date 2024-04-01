/**
 * Date should be formatted YYYY-MM-DD i.e. "1997-04-22"
 *
 * @returns A whole number, rounded down, of years since the given date.
 */
export const yearsSince = (date: string): number => {
	const startDate = new Date(date);
	const currentDate = new Date();
	const diffInMs = currentDate.getTime() - startDate.getTime();
	const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365);
	return Math.floor(diffInYears);
};
