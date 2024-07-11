import { DefaultBodyType, http, HttpResponse, PathParams } from 'msw';

import { CallsGetResponseType } from '@/types/calls';
import { calls } from '@/test/fixtures/calls';

export const callHandlers = [
	http.get<PathParams, DefaultBodyType, CallsGetResponseType>('/', () => {
		return HttpResponse.json(calls);
	}),
];
