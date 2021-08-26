import React from 'react';
import { Post } from './Post';

export function Posts({ posts }) {
	return posts.length
		? posts.map((post) => <Post key={post} post={post} />)
		: 'Постов пока нет';
}
