import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import AppLayout from '@/components/layout/app-layout';
import CallsPage from '@/pages/calls';
import ContactsPage from './pages/contacts';
import KeypadPage from './pages/keypad';
import VoicemailPage from './pages/voicemail';
import NotFoundPage from './pages/not-found';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route index element={<Navigate replace to="calls" />} />
						<Route path="calls" element={<CallsPage />} />
						<Route path="contacts" element={<ContactsPage />} />
						<Route path="keypad" element={<KeypadPage />} />
						<Route path="voicemail" element={<VoicemailPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
