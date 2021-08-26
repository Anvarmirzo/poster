import React from 'react';
import { useSelector } from 'react-redux';
import { Post } from './Post';

export function Posts() {
	const posts = useSelector((state) => state.posts.posts);

	return posts.length
		? posts.map((post) => <Post key={post.id} post={post} />)
		: 'Постов пока нет';
}
