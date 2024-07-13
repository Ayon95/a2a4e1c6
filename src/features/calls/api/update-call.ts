import { CALLS_BASE_URL } from '@/lib/constants';
import { CallUpdateRequestType } from '@/types/calls';

export async function updateCall({
	id,
	data,
}: {
	id: string;
	data: CallUpdateRequestType;
}) {
	const response = await fetch(`${CALLS_BASE_URL}/${id}`, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		throw new Error('Failed to update call.');
	}
}
