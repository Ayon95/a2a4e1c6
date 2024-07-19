import { Loader2 } from 'lucide-react';

import ErrorMessage from '@/components/ui/error-message';
import { useGetCalls } from '@/features/calls/queries/use-get-calls';
import CallsContent from '@/features/calls/components/calls-content';

function CallsPage() {
	const { data, isLoading, isError } = useGetCalls();
	return (
		<div className="min-h-[60vh]">
			{isLoading ? (
				<div
					className="flex items-center justify-center p-4"
					aria-labelledby="loaderText"
				>
					<Loader2
						className="size-8 animate-spin text-primary"
						aria-labelledby="loaderText"
						role="img"
					/>
					<span className="sr-only" id="loaderText">
						Fetching calls
					</span>
				</div>
			) : isError ? (
				<ErrorMessage>
					<span className="sr-only">Error:</span> Failed to fetch calls.
				</ErrorMessage>
			) : data && data.length > 0 ? (
				<CallsContent calls={data} />
			) : (
				<p className="text-center">There are no calls to show.</p>
			)}
		</div>
	);
}

export default CallsPage;
