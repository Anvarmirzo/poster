import { HIDE_LOADER, SHOW_LOADER } from '../reducers/types';

export function showLoader() {
	return {
		type: SHOW_LOADER,
	};
}

export function hideLoader() {
	return {
		type: HIDE_LOADER,
	};
}
