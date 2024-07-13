import { CALLS_BASE_URL } from '@/lib/constants';
import { Call } from '@/types/calls';

export async function getCalls(): Promise<Call[]> {
	const response = await fetch(CALLS_BASE_URL);

	if (!response.ok) {
		throw new Error('Failed to fetch calls.');
	}

	return await response.json();
}
