import { useState } from 'react';
import { HiOutlineArchiveBoxArrowDown, HiOutlineArchiveBoxXMark } from 'react-icons/hi2';

import { Call, CallTabOptions, isCallTabOption } from '@/types/calls';
import ButtonIconText from '@/components/ui/button-icon-text';
import { useBulkUpdateCalls } from '../queries/use-bulk-update-calls';
import CallTabs from './call-tabs';

interface CallsContentProps {
	calls: Call[];
}

function CallsContent({ calls }: CallsContentProps) {
	const [activeTab, setActiveTab] = useState<CallTabOptions>('all');
	const bulkUpdateCallsMutation = useBulkUpdateCalls();

	const allCallIds = calls.map(call => call.id);

	function archiveAllCalls() {
		bulkUpdateCallsMutation.mutate({ ids: allCallIds, data: { is_archived: true } });
	}

	function unArchiveAllCalls() {
		bulkUpdateCallsMutation.mutate({ ids: allCallIds, data: { is_archived: false } });
	}

	return (
		<>
			<div className="mb-4 flex flex-wrap items-center justify-between gap-2">
				<h1 className="text-xl font-medium">
					{activeTab === 'all' && 'Activity Feed'}
					{activeTab === 'incoming' && 'Incoming Calls'}
					{activeTab === 'archived' && 'Archived Calls'}
				</h1>
				{activeTab === 'all' && (
					<ButtonIconText
						Icon={HiOutlineArchiveBoxArrowDown}
						className="h-auto"
						onClick={archiveAllCalls}
						disabled={bulkUpdateCallsMutation.isPending}
					>
						Archive all
					</ButtonIconText>
				)}
				{activeTab === 'archived' && (
					<ButtonIconText
						Icon={HiOutlineArchiveBoxXMark}
						className="h-auto"
						onClick={unArchiveAllCalls}
						disabled={bulkUpdateCallsMutation.isPending}
					>
						Unarchive all
					</ButtonIconText>
				)}
			</div>
			<CallTabs
				calls={calls}
				activeTab={activeTab}
				onActiveTabChange={value => setActiveTab(isCallTabOption(value) ? value : 'all')}
			/>
		</>
	);
}

export default CallsContent;
