import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { updateCall } from '../api/update-call';

export function useUpdateCall() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: updateCall,
		onSuccess: (_data, variables) => {
			toast.success(
				`Call ${variables.data.is_archived ? 'archived' : 'unarchived'} successfully!`,
			);
			queryClient.invalidateQueries({ queryKey: ['calls'] });
		},
		onError: error => {
			toast.error(error.message);
		},
	});
}
