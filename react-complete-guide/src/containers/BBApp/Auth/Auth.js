import React, { Component } from "react";
import { connect } from "react-redux";

import Input from "../../../components/BB/UI/Input/Input";
import Button from "../../../components/BB/UI/Button/Button";
import styles from "./Auth.module.css";
import * as actionTypes from "../../../store/BBStore/actions/index";
import Spinner from "../../../components/BB/UI/Spinner/Spinner";
import { Redirect } from "react-router-dom";

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType  : "input",
        elementConfig: {
          type       : "email",
          placeholder: "Enter your mail",
        },
        value     : "",
        validation: {
          required: true,
          isEmail : true,
        },
        valid         : false,
        touched       : false,
        invalidMessage: "Enter a valid Email Address",
      },
      password: {
        elementType  : "input",
        elementConfig: {
          type       : "password",
          placeholder: "Enter your password",
        },
        value     : "",
        validation: {
          required : true,
          minLength: 6,
        },
        valid         : false,
        touched       : false,
        invalidMessage: "Enter a valid Password",
      },
    },
    switchFormType: true,
  };

  inputChangeHandler = (event, inputIdentifier) => {
    // console.log(event.target.value)
    const updatedControls = {
      ...this.state.controls,
      [inputIdentifier]: {
        ...this.state.controls[inputIdentifier],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.controls[inputIdentifier].validation
        ),
        touched: true,
      },
    };
    this.setState({ controls: updatedControls });
  };

  checkValidity = (value, rules) => {
    let isValid = true;
    // handling the execution when input element doesnt have any validations mentioned
    if (rules == undefined) {
      return true;
    }
    if (rules.required) {
      isValid = isValid && value.trim() !== "";
    }
    if (rules.minLength) {
      isValid = isValid && value.length >= rules.minLength;
    }
    if (rules.maxLength) {
      isValid = isValid && value.length <= rules.maxLength;
    }
    if (rules.isEmail) {
      const emailPattern = /^[a-z]+[\w\.\_\d]*@[a-z]+\.[a-z]{2,3}$/;
            isValid      = isValid && emailPattern.test(value);
    }
    if (rules.isNumeric) {
      const numPattern = /^\d+$/;
            isValid    = isValid && numPattern.test(value);
    }
    return isValid;
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.switchFormType
    );
  };

  switchAuthHandler = () => {
    this.setState({
      switchFormType: !this.state.switchFormType,
    });
  };

  componentDidMount() {
    //resetting path when
    // 1. we are not building burger
    // 2. we dont have the authenticated user
    if (!this.props.burgerBuildingStatus && this.props.authRedirectPath !== '/') {
      //trying to reset the authRedirect Path
      this.props.onSetAuthRedirectPath();
    }
  }
  render() {
    let formElements = [];
    for (var k in this.state.controls) {
      formElements.push({
        id    : k,
        config: this.state.controls[k],
      });
    }

    let form = formElements.map((e) => (
      <Input
        key            = {e.id}
        elementType    = {e.config.elementType}
        elementConfig  = {e.config.elementConfig}
        value          = {e.config.value}
        invalid        = {!e.config.valid}
        shouldValidate = {e.config.validation}
        changed        = {(event) => {
          this.inputChangeHandler(event, e.id);
        }}
        touched    = {e.config.touched}
        invalidMsg = {e.config.invalidMessage}
      />
    ));
    if (this.props.loading) {
      form = <Spinner />;
    }
    let err_msg = null;
    if (this.props.error) {
      err_msg = <p>{this.props.error.message}</p>;
    }
    let authContent = null;
    // console.log("changing authcontent - "+this.props.isAuthenticated);
    if (this.props.isAuthenticated) {
      authContent = <Redirect to = {this.props.authRedirectPath} />;
    } else {
      authContent = (
        <div className = {styles.Auth}>
          <h2>
            You can Sign {!this.state.switchFormType ? "IN" : "UP"} from here
          </h2>
          <div>{err_msg}</div>
          <form onSubmit = {this.submitHandler}>
            {form}
            <Button btnType = "Success"> Submit </Button>
          </form>
          <Button btnType = "Default" clicked = {this.switchAuthHandler}>
            Switch to SIGN {this.state.switchFormType ? "IN" : "UP"}
          </Button>
        </div>
      );
    }
    return authContent;
  }
}

const matStateToProps = (state) => {
  let authJson = {
    loading             : state.authentication.loading,
    error               : state.authentication.error,
    isAuthenticated     : state.authentication.token != null,
    authRedirectPath    : state.authentication.authRedirectPath,
    burgerBuildingStatus: state.burgerBuilder.building,
  };
  // console.log("[Auth.js State Props]");
  // console.log(state);
  return authJson;
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, pass, formType) =>
      dispatch(actionTypes.auth(email, pass, formType)),
    onSetAuthRedirectPath: () => dispatch(actionTypes.setAuthRedirectPath("/")),
  };
};
export default connect(matStateToProps, mapDispatchToProps)(Auth);
