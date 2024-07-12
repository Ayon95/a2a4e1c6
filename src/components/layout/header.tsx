import Logo from '@/components/ui/logo';

function Header() {
	return (
		<header className="flex justify-center border-b border-b-primary/20 p-6">
			<a href="/">
				<span className="sr-only">Aircall logo home</span>
				<Logo />
			</a>
		</header>
	);
}

export default Header;
