import { showAlert } from './actions/alert';
import { CREATE_POST } from './reducers/types';

const forbidden = ['fuck', 'php', 'spam'];

export function forbiddenWordsMiddleware({ dispatch }) {
	return function (next) {
		return function (action) {
			if (action.type === CREATE_POST) {
				const found = forbidden.filter((w) => action.payload.title.includes(w));
				if (found.length) {
					return dispatch(showAlert('Не употребляйте запрещенные слова'));
				}
			}
			return next(action);
		};
	};
}
