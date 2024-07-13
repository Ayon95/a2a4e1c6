import { Call } from '@/types/calls';
import CallItem from './call-item';
import { useUpdateCall } from '../queries/use-update-call';

export interface CallListProps {
	calls: Call[];
}

function CallList({ calls }: CallListProps) {
	const updateCallMutation = useUpdateCall();

	function archiveCall(id: string) {
		updateCallMutation.mutate({ id, data: { is_archived: true } });
	}

	function unarchiveCall(id: string) {
		updateCallMutation.mutate({ id, data: { is_archived: false } });
	}
	return (
		<ul className="my-scrollbar h-[44vh] divide-y divide-primary/20 overflow-y-scroll pr-3">
			{calls.map(call => (
				<CallItem
					key={call.id}
					call={call}
					onClickArchive={() => archiveCall(call.id)}
					onClickUnarchive={() => unarchiveCall(call.id)}
				/>
			))}
		</ul>
	);
}

export default CallList;
