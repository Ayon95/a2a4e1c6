import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { DEFAULT_DATE_FORMAT_OPTIONS, DEFAULT_LOCALE } from './constants';

const dateFormatter = new Intl.DateTimeFormat(
	DEFAULT_LOCALE,
	DEFAULT_DATE_FORMAT_OPTIONS,
);

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(
	dateString: string,
	locales?: Intl.LocalesArgument,
	options?: Intl.DateTimeFormatOptions,
) {
	const dateObj = new Date(dateString);
	const utcDate = new Date(
		dateObj.getUTCFullYear(),
		dateObj.getUTCMonth(),
		dateObj.getUTCDate(),
		dateObj.getUTCHours(),
		dateObj.getUTCMinutes(),
	);

	if (locales || options) {
		return new Intl.DateTimeFormat(
			locales || DEFAULT_LOCALE,
			options || DEFAULT_DATE_FORMAT_OPTIONS,
		).format(utcDate);
	}

	return dateFormatter.format(utcDate);
}
