import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from './Post';
import { fetchPosts } from './../redux/actions/fetchPosts';
import { Loader } from './Loader';

export function FetchedPosts() {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.posts.fetchedPosts);
	const loading = useSelector((state) => state.app.loading);

	const fetchedPostsHandler = () => {
		dispatch(fetchPosts());
	};

	if (loading) {
		return <Loader />;
	}

	return posts.length ? (
		posts.map((post) => <Post post={post} key={post.id} />)
	) : (
		<button onClick={fetchedPostsHandler} className='btn btn-primary'>
			Загрузить
		</button>
	);
}
