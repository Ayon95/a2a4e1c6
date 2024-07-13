import Logo from '@/components/ui/logo';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className="flex justify-center border-b border-b-primary/20 p-6">
			<Link to="/calls">
				<span className="sr-only">Aircall logo home</span>
				<Logo />
			</Link>
		</header>
	);
}

export default Header;
