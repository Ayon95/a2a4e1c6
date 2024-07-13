import { Loader2 } from 'lucide-react';

import ErrorMessage from '@/components/ui/error-message';
import { useGetCalls } from '@/features/calls/queries/use-get-calls';
import CallTabs from '@/features/calls/components/call-tabs';

function CallsPage() {
	const { data, isLoading, isError } = useGetCalls();
	return (
		<div className="min-h-[60vh]">
			<h1 className="mb-3 text-3xl font-medium">Activity Feed</h1>
			{isLoading ? (
				<div className="flex items-center justify-center p-4">
					<Loader2 className="size-8 animate-spin text-primary" />
				</div>
			) : isError ? (
				<ErrorMessage>
					<span className="sr-only">Error:</span> Failed to fetch calls.
				</ErrorMessage>
			) : data && data.length > 0 ? (
				<CallTabs calls={data} />
			) : (
				<p className="text-center">There are no calls to show.</p>
			)}
		</div>
	);
}

export default CallsPage;
