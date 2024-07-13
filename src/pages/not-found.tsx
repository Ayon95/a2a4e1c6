import { Button } from '@/components/ui/button';
import PageTitle from '@/components/ui/page-title';
import { Link } from 'react-router-dom';

function NotFoundPage() {
	return (
		<div className="grid min-h-[60vh] place-content-center text-center">
			<div>
				<PageTitle className="mb-1 text-2xl">404 Error</PageTitle>
				<p className="mb-6">The requested page could not be found.</p>
				<Button asChild>
					<Link to="/calls">Back to home</Link>
				</Button>
			</div>
		</div>
	);
}

export default NotFoundPage;
