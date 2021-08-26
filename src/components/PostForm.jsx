import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from './../redux/actions/createPost';
import { showAlert } from './../redux/actions/alert';
import { Alert } from './Alert';

export function PostForm() {
	const [title, setTitle] = useState('');
	const dispatch = useDispatch();
	const alert = useSelector((state) => state.app.alert);

	const submitHandler = (event) => {
		event.preventDefault();

		const newPost = {
			title,
			id: Date.now().toString(),
		};

		if (title.trim().length) {
			console.log(dispatch(createPost(newPost)));
		} else {
			return dispatch(showAlert('Название поста не может быть пустым'));
		}

		setTitle('');
	};

	const inputChangeHandler = (e) => {
		setTitle(e.target.value);
	};

	return (
		<form onSubmit={submitHandler}>
			{alert && <Alert text={alert} />}

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
