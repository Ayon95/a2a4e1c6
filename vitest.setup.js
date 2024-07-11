import '@testing-library/dom';
import { afterAll, afterEach, beforeAll } from 'vitest';

import { cleanup } from '@testing-library/react';
import { mockServer } from './src/test/mocks/server';

beforeAll(() => mockServer.listen());

afterEach(() => {
	cleanup();
	mockServer.resetHandlers();
});

afterAll(() => mockServer.close());
