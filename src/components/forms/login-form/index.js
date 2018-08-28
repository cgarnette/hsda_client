import React from 'react';

import Form from '../form/form';
import Field from '../form/field';

import './login-form.css';

export default function LoginForm(props){

	const submit = (event) => {
		const data = new FormData(event.target);
		console.log(data);
	};

	return(
		<Form id="login-form" className="login-form" onSubmit={submit} header="login">
				<Field name="username" type="text" label="username"/>
				<Field name="password" type="password" label="password"/>
		</Form>
	);
}