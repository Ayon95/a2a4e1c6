import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Call, CallTabOptions } from '@/types/calls';
import CallList from './call-list';

interface CallTabsProps {
	calls: Call[];
	activeTab: CallTabOptions;
	onActiveTabChange: (value: string) => void;
}

function CallTabs({ calls, activeTab, onActiveTabChange }: CallTabsProps) {
	const incomingCalls = calls.filter(call => call.direction === 'inbound');
	const archivedCalls = calls.filter(call => call.is_archived);
	return (
		<Tabs value={activeTab} onValueChange={onActiveTabChange}>
			<TabsList className="grid w-full grid-cols-[repeat(auto-fit,minmax(5rem,1fr))] gap-2">
				<TabsTrigger value="all">All</TabsTrigger>
				<TabsTrigger value="incoming">Incoming</TabsTrigger>
				<TabsTrigger value="archived">Archived</TabsTrigger>
			</TabsList>
			<TabsContent value="all">
				<CallList calls={calls} />
			</TabsContent>
			<TabsContent value="incoming">
				{incomingCalls.length > 0 ? (
					<CallList calls={incomingCalls} />
				) : (
					<p className="p-4 text-center">No incoming calls</p>
				)}
			</TabsContent>
			<TabsContent value="archived">
				{archivedCalls.length > 0 ? (
					<CallList calls={archivedCalls} />
				) : (
					<p className="p-4 text-center">No archived calls</p>
				)}
			</TabsContent>
		</Tabs>
	);
}

export default CallTabs;
