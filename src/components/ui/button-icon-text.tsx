import { VariantProps } from 'class-variance-authority';
import React from 'react';
import { Button, buttonVariants } from './button';
import { IconBaseProps } from 'react-icons';

interface ButtonIconTextProps extends React.ComponentPropsWithoutRef<'button'> {
	children: React.ReactNode;
	size?: VariantProps<typeof buttonVariants>['size'];
	variant?: VariantProps<typeof buttonVariants>['variant'];
	Icon: React.ComponentType<IconBaseProps>;
}

function ButtonIconText({
	children,
	size,
	variant,
	Icon,
	...props
}: ButtonIconTextProps) {
	return (
		<Button {...props} size={size || 'sm'} variant={variant || 'ghost'}>
			<Icon className="mr-2 size-4" aria-hidden="true" />
			{children}
		</Button>
	);
}

export default ButtonIconText;
