import { CALLS_BASE_URL } from '@/lib/constants';
import { Call, CallUpdateRequestType } from '@/types/calls';

export async function updateCall({
	id,
	data,
}: {
	id: Call['id'];
	data: CallUpdateRequestType;
}) {
	try {
		const response = await fetch(`${CALLS_BASE_URL}/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error('Failed to update call.');
		}
	} catch {
		throw new Error('Failed to update call.');
	}
}
