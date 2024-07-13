import { CallTabOptions } from '@/types/calls';

export const CALLS_BASE_URL = 'https://aircall-backend.onrender.com/activities';
export const DEFAULT_LOCALE: Intl.LocalesArgument = 'en-US';
export const DEFAULT_DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
	month: 'long',
	day: 'numeric',
	year: 'numeric',
};
export const CALL_TAB_OPTIONS: Set<CallTabOptions> = new Set([
	'all',
	'incoming',
	'archived',
]);
