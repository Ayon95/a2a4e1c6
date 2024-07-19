import { screen, within } from '@testing-library/react';

import { customRender } from '@/test/utils';
import CallItem from '../call-item';
import {
	archivedCalls,
	calls,
	incomingCalls,
	outgoingCalls,
	unarchivedCalls,
} from '@/test/fixtures/calls';

describe('Call Item', () => {
	test('renders common call details', () => {
		customRender(<CallItem call={calls[0]} />);

		const callItem = screen.getByRole('listitem');
		const callDate = within(callItem).getByText('July 3, 2024');
		const callTime = within(callItem).getByText('7:05 PM');
		const caller = within(callItem).getByText(calls[0].from);
		const callee = within(callItem).getByText(calls[0].to);

		[callDate, callTime, caller, callee].forEach(element => {
			expect(element).toBeVisible();
		});
	});

	test('renders incoming call details for incoming call', () => {
		customRender(<CallItem call={incomingCalls[0]} />);

		const callItem = screen.getByRole('listitem');
		const incomingCallText = within(callItem).getByText('Incoming call');

		expect(incomingCallText).toBeInTheDocument();
	});

	test('renders outgoing call details for outgoing call', () => {
		customRender(<CallItem call={outgoingCalls[0]} />);

		const callItem = screen.getByRole('listitem');
		const outgoingCallText = within(callItem).getByText('Outgoing call');

		expect(outgoingCallText).toBeInTheDocument();
	});

	test('renders archive button for unarchived call', () => {
		customRender(<CallItem call={unarchivedCalls[0]} />);

		const callItem = screen.getByRole('listitem');
		const archiveButton = within(callItem).getByRole('button', { name: /archive/i });

		expect(archiveButton).toBeVisible();
	});

	test('renders unarchive button for archived call', () => {
		customRender(<CallItem call={archivedCalls[0]} />);

		const callItem = screen.getByRole('listitem');
		const unarchiveButton = within(callItem).getByRole('button', { name: /unarchive/i });

		expect(unarchiveButton).toBeVisible();
	});
});
