import React, {Component} from 'react';

import Form from '../form/form';
import Field from '../form/field';

import './login-form.css';

export class LoginForm extends Component{

	state = {
		error: null,
	}

	changeHandler = (fieldData) => {
		const{name, value} = fieldData;
		let field = {};
		field[name] = value;
		this.setState((prevState) => {
			return {...prevState, ...field};
		});
	}

	submit = () => {
		console.log(this.state);
		/**
		 * Grab field data off of the state by "name" of field and use to "login"
		 */
	}

	render() {
		return(
			<Form id="login-form" className="login-form" onSubmit={this.submit} header="login">
					<Field name="username" type="text" label="username" onChange={this.changeHandler}/>
					<Field name="password" type="password" label="password" onChange={this.changeHandler}/>
					<button type="submit">login</button>
			</Form>
		);
	}
}

export default LoginForm;