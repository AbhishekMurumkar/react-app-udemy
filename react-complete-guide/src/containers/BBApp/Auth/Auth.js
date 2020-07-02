import React, { Component } from 'react';
import Input from "../../../components/BB/UI/Input/Input";
import Button from "../../../components/BB/UI/Button/Button";

class Auth extends Component {
	state = {
		controls: {
			email: {
				elementType: "input",
				elementConfig: {
					type: "email",
					placeholder: "Enter your mail",
				},
				value: "",
				validation: {
					required: true,
					isEmail: true,
				},
				valid: false,
				touched: false,
				invalidMessage: "Enter a valid street",
			},
			password: {
				elementType: "input",
				elementConfig: {
					type: "password",
					placeholder: "Enter your password",
				},
				value: "",
				validation: {
					required: true,
					minLength: 6,
				},
				valid: false,
				touched: false,
				invalidMessage: "Enter a valid street",
			},
		}
	}
	render() {
		let formElements = [];
		for (var k in this.state.controls) {
			formElements.push({
				id: k,
				config: this.state.controls[k]
			});
		}

		const form = formElements.map(e => (
			<Input
				key={e.id}
				elementType={e.config.elementType}
				elementConfig={e.config.elementConfig}
				value={e.config.value}
				invalid={!e.config.valid}
				shouldValidate={e.config.validation}
				changed={(event) => {
					this.inputChangeHandler(event, e.id);
				}}
				touched={e.config.touched}
				invalidMsg={e.config.invalidMessage} 
			/>
			)
		);
		return (
			<div>
				<form>
				{form}
				<Button btnType="Success"> Submit </Button>
				</form>
			</div>
		)
	}
}

export default Auth;