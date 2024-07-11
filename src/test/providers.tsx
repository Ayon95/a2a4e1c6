import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function Providers({ children }: { children: React.ReactNode }) {
	const queryClient = new QueryClient({
		defaultOptions: { queries: { retry: false } },
	});

	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export default Providers;
