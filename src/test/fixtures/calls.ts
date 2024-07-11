import { CallsGetResponseType } from '@/types/calls';

export const calls: CallsGetResponseType = [
	{
		direction: 'inbound',
		from: 1,
		to: 2,
		via: 1,
		duration: 0,
		is_archived: false,
		call_type: 'answered',
		id: '6685a0df24a7a79ae0c50f8f',
		created_at: '2024-07-03T19:05:03.506Z',
	},
	{
		direction: 'outbound',
		from: 2,
		to: 1,
		via: 1,
		duration: 0,
		is_archived: false,
		call_type: 'answered',
		id: '6685b79524326ad725d48041',
		created_at: '2024-07-03T20:41:57.436Z',
	},
	{
		direction: 'outbound',
		from: 2,
		to: 1,
		via: 1,
		duration: 60,
		is_archived: true,
		call_type: 'answered',
		id: '6683c79424326ad725d51d41',
		created_at: '2024-07-04T19:41:57.436Z',
	},
];
