import { screen, within } from '@testing-library/react';

import { customRender } from '@/test/utils';
import CallTabs from '../call-tabs';
import { archivedCalls, calls, incomingCalls } from '@/test/fixtures/calls';

describe('Call Tabs', () => {
	const mockOnActiveTabChange = vi.fn();

	afterEach(() => {
		vi.restoreAllMocks();
	});

	test('renders all calls when All tab is selected', () => {
		customRender(
			<CallTabs
				calls={calls}
				activeTab="all"
				onActiveTabChange={mockOnActiveTabChange}
			/>,
		);

		const callItems = screen.getAllByRole('listitem');

		expect(callItems).toHaveLength(calls.length);
		expect(within(callItems[0]).getByText('Incoming call')).toBeVisible();
		expect(within(callItems[1]).getByText('Outgoing call')).toBeVisible();
		expect(within(callItems[2]).getByText('Outgoing call')).toBeVisible();
	});

	test('renders incoming calls when Incoming tab is selected', () => {
		customRender(
			<CallTabs
				calls={calls}
				activeTab="incoming"
				onActiveTabChange={mockOnActiveTabChange}
			/>,
		);

		const callItems = screen.getAllByRole('listitem');

		expect(callItems).toHaveLength(incomingCalls.length);
		expect(within(callItems[0]).getByText('Incoming call')).toBeVisible();
	});

	test('renders archived calls when Archived tab is selected', () => {
		customRender(
			<CallTabs
				calls={calls}
				activeTab="archived"
				onActiveTabChange={mockOnActiveTabChange}
			/>,
		);

		const callItems = screen.getAllByRole('listitem');

		expect(callItems).toHaveLength(archivedCalls.length);

		callItems.forEach(callItem => {
			const unarchiveButton = within(callItem).getByRole('button', {
				name: /unarchive/i,
			});
			expect(unarchiveButton).toBeVisible();
		});
	});
});
