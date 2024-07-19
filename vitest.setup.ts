import '@testing-library/jest-dom/vitest';
import { afterAll, afterEach, beforeAll } from 'vitest';

import { cleanup } from '@testing-library/react';
import { mockServer } from './src/test/mocks/server';

// Mocking window.matchMedia() since it is not implemented in JSDOM
Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: vi.fn().mockImplementation(query => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: vi.fn(), // deprecated
		removeListener: vi.fn(), // deprecated
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		dispatchEvent: vi.fn(),
	})),
});

beforeAll(() => mockServer.listen());

afterEach(() => {
	cleanup();
	mockServer.resetHandlers();
});

afterAll(() => mockServer.close());
