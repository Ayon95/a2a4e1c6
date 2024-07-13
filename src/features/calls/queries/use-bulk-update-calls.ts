import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { bulkUpdateCalls } from '../api/bulk-update-calls';

export function useBulkUpdateCalls() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: bulkUpdateCalls,
		onSuccess: (_data, variables) => {
			toast.success(
				`All calls ${variables.data.is_archived ? 'archived' : 'unarchived'} successfully!`,
			);
			queryClient.invalidateQueries({ queryKey: ['calls'] });
		},
		onError: error => {
			toast.error(error.message);
		},
	});
}
