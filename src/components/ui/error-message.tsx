import React from 'react';
import { cn } from '@/lib/utils';

interface ErrorMessageProps extends React.ComponentPropsWithoutRef<'p'> {
	children: React.ReactNode;
}

function ErrorMessage({ children, className, ...props }: ErrorMessageProps) {
	return (
		<p className={cn('text-center text-red-500', className)} {...props}>
			{children}
		</p>
	);
}

export default ErrorMessage;
