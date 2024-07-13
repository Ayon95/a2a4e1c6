import Header from './header';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';

function AppLayout() {
	return (
		<div className="my-min-h-screen-svh flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 p-4">
			<div className="mx-auto max-w-96 grow rounded-lg bg-slate-100 shadow-md">
				<Header />
				<main className="p-6">
					<Outlet />
				</main>
				<Navbar />
			</div>
		</div>
	);
}

export default AppLayout;
