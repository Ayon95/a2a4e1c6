import { CALL_TAB_OPTIONS } from '@/lib/constants';

export type Call = {
	id: string;
	direction: 'inbound' | 'outbound';
	from: number;
	to: number;
	via: number;
	duration: number;
	is_archived: boolean;
	call_type: 'missed' | 'answered' | 'voicemail';
	created_at: string;
};

export type CallTabOptions = 'all' | 'incoming' | 'archived';

export type CallsGetResponseType = Call[];

export type CallUpdateRequestType = Pick<Call, 'is_archived'>;

// Type predicates

export function isCallTabOption(value: string): value is CallTabOptions {
	return CALL_TAB_OPTIONS.has(value as CallTabOptions);
}
