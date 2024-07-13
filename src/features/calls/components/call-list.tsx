import { Call } from '@/types/calls';
import CallItem from './call-item';

export interface CallListProps {
	calls: Call[];
}

function CallList({ calls }: CallListProps) {
	return calls.length > 0 ? (
		<ul className="my-scrollbar h-[44vh] divide-y divide-primary/20 overflow-y-scroll pr-3">
			{calls.map(call => (
				<CallItem key={call.id} call={call} />
			))}
		</ul>
	) : (
		<p className="p-4 text-center">No archived calls</p>
	);
}

export default CallList;
