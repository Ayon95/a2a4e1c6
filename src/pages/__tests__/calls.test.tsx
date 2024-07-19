import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DefaultBodyType, http, HttpResponse, PathParams } from 'msw';

import { customRender } from '@/test/utils';
import CallsPage from '../calls';
import { mockServer } from '@/test/mocks/server';
import { CALLS_BASE_URL } from '@/lib/constants';
import { Toaster } from '@/components/ui/sonner';
import { archivedCalls, calls, unarchivedCalls } from '@/test/fixtures/calls';
import { CallsGetResponseType } from '@/types/calls';
import { formatDate } from '@/lib/utils';

describe('Calls Page', () => {
	test('renders a loading spinner when calls are being fetched', async () => {
		customRender(<CallsPage />);
		const loadingSpinner = await screen.findByRole('img', { name: /Fetching calls/i });
		expect(loadingSpinner).toBeVisible();
	});

	test('renders an error message if calls cannot be fetched', async () => {
		mockServer.use(
			http.get(CALLS_BASE_URL, () => {
				return HttpResponse.error();
			}),
		);

		customRender(<CallsPage />);

		const errorMessage = await screen.findByText('Failed to fetch calls.');

		expect(errorMessage).toBeVisible();
	});

	test('renders no calls text if there are no calls to show', async () => {
		mockServer.use(
			http.get<PathParams, DefaultBodyType, CallsGetResponseType>(CALLS_BASE_URL, () => {
				return HttpResponse.json([]);
			}),
		);

		customRender(<CallsPage />);

		const noCallsText = await screen.findByText('There are no calls to show.');

		expect(noCallsText).toBeVisible();
	});

	test('renders page title', async () => {
		customRender(<CallsPage />);
		const title = await screen.findByRole('heading', { level: 1, name: 'Activity Feed' });
		expect(title).toBeVisible();
	});

	test('renders call tabs', async () => {
		customRender(<CallsPage />);

		const tablistElement = await screen.findByRole('tablist');
		const allTab = within(tablistElement).getByRole('tab', {
			name: 'All',
			selected: true,
		});
		const incomingTab = within(tablistElement).getByRole('tab', { name: 'Incoming' });
		const archivedTab = within(tablistElement).getByRole('tab', { name: 'Archived' });

		expect(tablistElement).toBeVisible();

		[allTab, incomingTab, archivedTab].forEach(tab => {
			expect(tab).toBeVisible();
		});
	});

	test('shows incoming tab title when incoming tab is selected', async () => {
		customRender(<CallsPage />);

		const user = userEvent.setup();
		const incomingTab = await screen.findByRole('tab', { name: 'Incoming' });

		await user.click(incomingTab);

		const incomingTabTitle = screen.getByRole('heading', {
			name: 'Incoming Calls',
			level: 1,
		});

		expect(incomingTabTitle).toBeVisible();
	});

	test('shows archived tab title when archived tab is selected', async () => {
		customRender(<CallsPage />);

		const user = userEvent.setup();
		const archivedTab = await screen.findByRole('tab', { name: 'Archived' });

		await user.click(archivedTab);

		const archivedTabTitle = screen.getByRole('heading', {
			name: 'Archived Calls',
			level: 1,
		});

		expect(archivedTabTitle).toBeVisible();
	});

	test('shows archive-all button when all tab is selected', async () => {
		customRender(<CallsPage />);
		const archiveAllButton = await screen.findByRole('button', { name: 'Archive all' });
		expect(archiveAllButton).toBeVisible();
	});

	test('shows unarchive-all button when archived tab is selected', async () => {
		customRender(<CallsPage />);
		const user = userEvent.setup();
		const archivedTab = await screen.findByRole('tab', { name: 'Archived' });

		await user.click(archivedTab);

		const unArchiveAllButton = screen.getByRole('button', {
			name: 'Unarchive all',
		});
		expect(unArchiveAllButton).toBeVisible();
	});

	describe('Archive/Unarchive Calls', () => {
		test('can archive a call and show a success message', async () => {
			customRender(
				<>
					<CallsPage />
					<Toaster />
				</>,
			);

			mockServer.use(
				http.get<PathParams, DefaultBodyType, CallsGetResponseType>(
					CALLS_BASE_URL,
					() => {
						// Archiving the first unarchived call
						const updatedCalls = calls.map(call => {
							if (call.id === unarchivedCalls[0].id) {
								return { ...call, is_archived: true };
							}
							return call;
						});

						return HttpResponse.json(updatedCalls);
					},
				),
			);

			const user = userEvent.setup();
			const allCallsTabPanel = await screen.findByRole('tabpanel', { name: 'All' });
			const firstArchiveButton = within(allCallsTabPanel).getAllByRole('button', {
				name: /archive/i,
			})[0];

			await user.click(firstArchiveButton);

			const successMessage = await screen.findByText('Call archived successfully!');

			const archivedTab = screen.getByRole('tab', { name: 'Archived' });

			await user.click(archivedTab);

			const archivedCallsTabPanel = screen.getByRole('tabpanel', { name: 'Archived' });

			const firstArchivedCallTime = within(archivedCallsTabPanel).getByText(
				formatDate(unarchivedCalls[0].created_at, 'en-US', { timeStyle: 'short' }),
			);

			expect(successMessage).toBeVisible();
			expect(firstArchivedCallTime).toBeVisible();
		});

		test('can unarchive a call and show a success message', async () => {
			customRender(
				<>
					<CallsPage />
					<Toaster />
				</>,
			);

			mockServer.use(
				http.get<PathParams, DefaultBodyType, CallsGetResponseType>(
					CALLS_BASE_URL,
					() => {
						// Unarchiving the first archived call
						const updatedCalls = calls.map(call => {
							if (call.id === archivedCalls[0].id) {
								return { ...call, is_archived: false };
							}
							return call;
						});

						return HttpResponse.json(updatedCalls);
					},
				),
			);

			const user = userEvent.setup();
			const allCallsTabPanel = await screen.findByRole('tabpanel', { name: 'All' });
			const firstUnarchiveButton = within(allCallsTabPanel).getAllByRole('button', {
				name: /unarchive/i,
			})[0];

			await user.click(firstUnarchiveButton);

			const successMessage = await screen.findByText('Call unarchived successfully!');

			const archivedTab = screen.getByRole('tab', { name: 'Archived' });

			await user.click(archivedTab);

			const archivedCallsTabPanel = screen.getByRole('tabpanel', { name: 'Archived' });

			const firstArchivedCallTime = within(archivedCallsTabPanel).queryByText(
				formatDate(archivedCalls[0].created_at, 'en-US', { timeStyle: 'short' }),
			);

			expect(successMessage).toBeVisible();
			expect(firstArchivedCallTime).not.toBeInTheDocument();
		});

		test('shows an error message when a call archive status cannot be updated', async () => {
			mockServer.use(
				http.patch(`${CALLS_BASE_URL}/:id`, () => {
					return HttpResponse.error();
				}),
			);

			customRender(
				<>
					<CallsPage />
					<Toaster />
				</>,
			);

			const user = userEvent.setup();
			const allCallsTabPanel = await screen.findByRole('tabpanel', { name: 'All' });
			const firstArchiveButton = within(allCallsTabPanel).getAllByRole('button', {
				name: /archive/i,
			})[0];

			await user.click(firstArchiveButton);

			const errorMessage = await screen.findByText('Failed to update call.');

			expect(errorMessage).toBeVisible();
		});
	});
});
