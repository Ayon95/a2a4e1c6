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

export type CallsGetResponseType = Call[];
