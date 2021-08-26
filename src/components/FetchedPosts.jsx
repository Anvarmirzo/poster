import React from 'react';
import { Post } from './Post';

export function FetchedPosts({ posts }) {
	return posts.length ? (
		posts.map((post) => <Post post={post} key={post} />)
	) : (
		<button className='btn btn-primary'>Загрузить</button>
	);
}
