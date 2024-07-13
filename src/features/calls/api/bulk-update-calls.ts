import { CALLS_BASE_URL } from '@/lib/constants';
import { Call, CallUpdateRequestType } from '@/types/calls';

export async function bulkUpdateCalls({
	ids,
	data,
}: {
	ids: Call['id'][];
	data: CallUpdateRequestType;
}) {
	try {
		const requests = ids.map(id =>
			fetch(`${CALLS_BASE_URL}/${id}`, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			}),
		);

		const responses = await Promise.all(requests);

		if (responses.some(response => !response.ok)) {
			throw new Error('Failed to update all calls.');
		}
	} catch {
		throw new Error('Failed to update all calls.');
	}
}
