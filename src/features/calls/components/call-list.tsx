import { Call } from '@/types/calls';
import CallItem from './call-item';

export interface CallListProps {
	calls: Call[];
}

function CallList({ calls }: CallListProps) {
	return (
		<ul className="my-scrollbar relative h-[44vh] divide-y divide-primary/20 overflow-y-scroll pr-3">
			{calls.map(call => (
				<CallItem key={call.id} call={call} />
			))}
		</ul>
	);
}

export default CallList;
