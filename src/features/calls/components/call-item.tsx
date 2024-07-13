import { BsFillTelephoneInboundFill, BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { HiArchiveBoxArrowDown, HiArchiveBoxXMark } from 'react-icons/hi2';

import { Button } from '@/components/ui/button';
import { cn, formatDate } from '@/lib/utils';
import { Call } from '@/types/calls';

interface CallItemProps {
	call: Call;
}

function CallItem({ call }: CallItemProps) {
	return (
		<li
			key={call.id}
			className="grid grid-cols-[max-content_1fr_max-content_max-content] gap-x-4 gap-y-2 py-3"
		>
			<time
				dateTime={call.created_at}
				className="col-span-full text-center text-xs uppercase text-slate-500"
			>
				{formatDate(call.created_at)}
			</time>
			{call.direction === 'inbound' ? (
				<div className="self-center">
					<BsFillTelephoneInboundFill aria-hidden="true" className="fill-slate-400" />
					<span className="sr-only">Incoming call</span>
				</div>
			) : (
				<div className="self-center">
					<BsFillTelephoneOutboundFill aria-hidden="true" className="fill-slate-400" />
					<span className="sr-only">Outgoing call</span>
				</div>
			)}
			<div>
				<p className={cn('font-semibold', call.call_type === 'missed' && 'text-red-500')}>
					{call.from}
					{call.call_type === 'missed' && <span className="sr-only">Missed</span>}
				</p>
				<p className="text-xs text-slate-500">
					To <span className="text-sm font-semibold">{call.to}</span>
				</p>
			</div>
			<time
				dateTime={`${new Date(call.created_at).getUTCHours()}:${new Date(call.created_at).getUTCMinutes()}`}
				className="self-center text-xs text-slate-500"
			>
				{formatDate(call.created_at, 'en-US', { timeStyle: 'short' })}
			</time>
			<Button
				variant="ghost"
				className="size-7 self-center p-0 transition-colors duration-300 hover:bg-primary/15"
			>
				<span className="sr-only">{call.is_archived ? 'Unarchive' : 'Archive'}</span>
				{call.is_archived ? (
					<HiArchiveBoxXMark className="size-5 fill-primary" />
				) : (
					<HiArchiveBoxArrowDown className="size-5 fill-primary" />
				)}
			</Button>
		</li>
	);
}

export default CallItem;
