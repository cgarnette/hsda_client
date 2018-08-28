import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './form.css';

export class Form extends Component {

	//Form validate method implemented with the HTML5 validation API...
	validate = () => {
		const formEl = this.formEl;
		const formLength = formEl.length;

		if (formEl.checkValidity()===false) {
			for (let i = 0; i < formLength; i++) {
				const elem = formEl[i];
				if (elem.nodeName.toLowerCase() !== 'button' && elem.nodeName.toLowerCase() !== 'fieldset' ) {
					const errorMessage = elem.parentNode.parentNode.querySelector('.field-error-message');
					if (!elem.validity.valid) {
						errorMessage.textContent = elem.validationMessage;
					} else {
						errorMessage.textContent = '';
					}
				}
			}
			return false;
		}

		for (let i = 0; i < formLength; i++) {
			const elem = formEl[i];
			if (elem.nodeName.toLowerCase() !== 'button' && elem.nodeName.toLowerCase() !== 'fieldset' ) {
				const errorMessage = elem.parentNode.parentNode.querySelector('.field-error-message');
				errorMessage.textContent = '';
			}
		}
		return true;
	}

	submitHandler = (event) => {
		event.preventDefault();
		if (this.validate()) {
			this.props.onSubmit();
		}
	}
	render() {
		return (
			<form
				ref={form => (this.formEl = form)}
				onSubmit={this.submitHandler}
			>
				<fieldset className="form-fieldset">
					<legend className="form-legend">{this.props.header ? this.props.header : undefined}</legend>
					{this.props.children}
				</fieldset>
			</form>
		);
	}
}

Form.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	onSubmit: PropTypes.func.isRequired,
	header: PropTypes.string
};

export default Form;