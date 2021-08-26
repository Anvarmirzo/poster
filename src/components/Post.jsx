import React from 'react';

export function Post({ post }) {
	return (
		<div className='card'>
			<div className='card-body'>
				<h5 className='card-title'>Post title: {post}</h5>
			</div>
		</div>
	);
}
