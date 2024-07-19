import { DefaultBodyType, http, HttpResponse, PathParams } from 'msw';

import { Call, CallsGetResponseType, CallUpdateRequestType } from '@/types/calls';
import { calls } from '@/test/fixtures/calls';
import { CALLS_BASE_URL } from '@/lib/constants';

export const callHandlers = [
	http.get<PathParams, DefaultBodyType, CallsGetResponseType>(CALLS_BASE_URL, () => {
		return HttpResponse.json(calls);
	}),
	http.patch<{ id: string }, CallUpdateRequestType, { data: Call } | { error: string }>(
		`${CALLS_BASE_URL}/:id`,
		async ({ request, params }) => {
			const body = await request.json();
			const call = calls.find(call => call.id === params.id);

			if (!call) {
				return HttpResponse.json({ error: 'Account not found' }, { status: 404 });
			}

			const updatedCall: Call = { ...call, is_archived: body.is_archived };

			return HttpResponse.json({ data: updatedCall });
		},
	),
];
