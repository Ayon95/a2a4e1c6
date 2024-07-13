import { cn } from '@/lib/utils';

interface PageTitleProps extends React.ComponentPropsWithoutRef<'h1'> {
	children: React.ReactNode;
}

function PageTitle({ children, className, ...props }: PageTitleProps) {
	return (
		<h1 className={cn('text-xl font-medium', className)} {...props}>
			{children}
		</h1>
	);
}

export default PageTitle;
