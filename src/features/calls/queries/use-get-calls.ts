import { Call } from '@/types/calls';
import { useQuery } from '@tanstack/react-query';
import { getCalls } from '../api/get-calls';

export function useGetCalls() {
	return useQuery<Call[], Error>({
		queryKey: ['calls'],
		queryFn: getCalls,
	});
}
