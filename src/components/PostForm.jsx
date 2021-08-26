import React, { useState } from 'react';

export function PostForm() {
	const [title, setTitle] = useState('');

	const submitHandler = (event) => {
		event.preventDefault();
	};

	const inputChangeHandler = (e) => {
		setTitle(e.target.value);
		console.log(title);
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='form-group mb-3'>
				<label htmlFor='title'>Заголовок поста</label>
				<input
					className='form-control'
					type='text'
					id='title'
					value={title}
					name='title'
					onChange={(e) => inputChangeHandler(e)}
				/>
			</div>
			<button className='btn btn-success'>Создать</button>
		</form>
	);
}
