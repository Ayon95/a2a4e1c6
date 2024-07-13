import { Link, useLocation } from 'react-router-dom';
import { IconType } from 'react-icons';

import { cn } from '@/lib/utils';

interface NavLinkProps {
	link: { text: string; href: string; icon: IconType };
}
function NavLink({ link }: NavLinkProps) {
	const { href, text, icon: Icon } = link;
	const location = useLocation();
	const isActive = location.pathname.includes(href);

	return (
		<Link
			to={href}
			className={cn(
				'grid justify-items-center gap-1 text-sm duration-300 [transition-property:color,transform] hover:scale-105 hover:text-primary',
				isActive && 'text-primary',
			)}
		>
			<Icon aria-hidden="true" className="h-auto w-5" />
			{text}
		</Link>
	);
}

export default NavLink;
