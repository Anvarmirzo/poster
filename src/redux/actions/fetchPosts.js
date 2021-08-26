import { REQUEST_POSTS } from './../reducers/types';

export function fetchPosts() {
	return {
		type: REQUEST_POSTS,
	};
	/* 	return async (dispatch) => {
		try {
			dispatch(showLoader());
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/posts?_limit=5',
			);
			const json = await response.json();
			dispatch({ type: FETCH_POSTS, payload: json });
			dispatch(hideLoader());
		} catch (error) {
			dispatch(showAlert('Что-то пошло не так'));
			dispatch(hideLoader());
		}
	}; */
}
