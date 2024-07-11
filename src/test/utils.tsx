import { RenderOptions, render } from '@testing-library/react';
import Providers from './providers';

export function customRender(
	ui: React.ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>,
) {
	return render(ui, { wrapper: Providers, ...options });
}
