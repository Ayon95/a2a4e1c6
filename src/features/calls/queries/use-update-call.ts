import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCall } from '../api/update-call';
import { toast } from 'sonner';

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
		onError: () => {
			toast.error('Failed to update call.');
		},
	});
}
