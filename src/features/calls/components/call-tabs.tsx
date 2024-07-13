import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Call } from '@/types/calls';
import CallList from './call-list';

interface CallTabsProps {
	calls: Call[];
}

function CallTabs({ calls }: CallTabsProps) {
	const incomingCalls = calls.filter(call => call.direction === 'inbound');
	const archivedCalls = calls.filter(call => call.is_archived);
	return (
		<Tabs defaultValue="all">
			<TabsList className="grid w-full grid-cols-[repeat(auto-fit,minmax(4rem,1fr))] gap-2">
				<TabsTrigger value="all">All</TabsTrigger>
				<TabsTrigger value="incoming">Incoming</TabsTrigger>
				<TabsTrigger value="archived">Archived</TabsTrigger>
			</TabsList>
			<TabsContent value="all">
				<CallList calls={calls} />
			</TabsContent>
			<TabsContent value="incoming">
				<CallList calls={incomingCalls} />
			</TabsContent>
			<TabsContent value="archived">
				<CallList calls={archivedCalls} />
			</TabsContent>
		</Tabs>
	);
}

export default CallTabs;
