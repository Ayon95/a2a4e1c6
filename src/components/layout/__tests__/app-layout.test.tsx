import { screen, within } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { customRender } from '@/test/utils';
import AppLayout from '../app-layout';

describe('App Layout', () => {
	beforeEach(() => {
		customRender(
			<MemoryRouter initialEntries={['/']}>
				<Routes>
					<Route element={<AppLayout />}>
						<Route path="/" element={<h1>This is the home page</h1>} />
					</Route>
				</Routes>
			</MemoryRouter>,
		);
	});

	test('renders a header with Aircall logo link', () => {
		const header = screen.getByRole('banner');
		const logo = within(header).getByRole('link', { name: /aircall logo home/i });
		expect(logo).toBeVisible();
		expect(logo).toHaveAttribute('href', '/calls');
	});

	test('renders a navbar with all links', () => {
		const navbar = screen.getByRole('navigation');
		const callsLink = within(navbar).getByRole('link', { name: 'Calls' });
		const contactsLink = within(navbar).getByRole('link', { name: 'Contacts' });
		const keypadLink = within(navbar).getByRole('link', { name: 'Keypad' });
		const voicemailLink = within(navbar).getByRole('link', { name: 'Voicemail' });

		[callsLink, contactsLink, keypadLink, voicemailLink].forEach(link => {
			expect(link).toBeVisible();
		});

		expect(callsLink).toHaveAttribute('href', '/calls');
		expect(contactsLink).toHaveAttribute('href', '/contacts');
		expect(keypadLink).toHaveAttribute('href', '/keypad');
		expect(voicemailLink).toHaveAttribute('href', '/voicemail');
	});
});
