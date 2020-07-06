// import React, { Component } from "react";
// import Button from "../../../../components/BB/UI/Button/Button";
// import styles from "./ContactData.module.css";
// import Spinner from "../../../../components/BB/UI/Spinner/Spinner";
// import axios from "../../../../axios-orders";
// import Input from "../../../../components/BB/UI/Input/Input";

// class ContactData extends Component {
//   // componentDidMount() {
//     // console.log("ContactData.js , orderHandler");
//     // console.log(this.props);
//   // }
//   state = {
//     orderForm: {
//       name: {
//         elementType: "input",
//         elementConfig: {
//           type: "text",
//           placeholder: "Enter Name",
//         },
//         value: "",
//         validation:{
//           required:true,
//           minLength:8
//         },
//         valid:false,
//         touched:false,
//         invalidMessage:"Minimum 8 characters are required"
//       },
//       email: {
//         elementType: "input",
//         elementConfig: {
//           type: "text",
//           placeholder: "Enter E-mail",
//         },
//         value: "",
//         validation:{
//           required:true
//         },
//         valid:false,
//         touched:false,
//         invalidMessage:"Invalid Email format, Retry Again"
//       },
//       street: {
//         elementType: "input",
//         elementConfig: {
//           type: "text",
//           placeholder: "Enter Street",
//         },
//         value: "",
//         validation:{
//           required:true
//         },
//         valid:false,
//         touched:false,
//         invalidMessage:"Enter a valid street"
//       },
//       zipcode: {
//         elementType: "input",
//         elementConfig: {
//           type: "text",
//           placeholder: "Enter Zip Code",
//         },
//         value: "",
//         validation:{
//           required:true,
//           minLength:6,
//           maxLength:6
//         },
//         valid:false,
//         touched:false,
//         invalidMessage:"Enter ZIPCODE having 6 digits only"
//       },
//       country: {
//         elementType: "input",
//         elementConfig: {
//           type: "text",
//           placeholder: "Enter Country",
//         },
//         value: "",
//         validation:{
//           required:true
//         },
//         valid:false,
//         touched:false,
//         invalidMessage:"Enter a country"
//       },
//       city: {
//         elementType: "input",
//         elementConfig: {
//           type: "text",
//           placeholder: "Enter City",
//         },
//         value: "",
//         validation:{
//           required:true
//         },
//         valid:false,
//         touched:false,
//         invalidMessage:"Enter a city"
//       },
//       deliveryMethod: {
//         elementType: "select",
//         elementConfig: {
//           options: [
//             { value: "fastest", displayValue: "Fastest" },
//             { value: "cheapest", displayValue: "Cheapest" },
//           ],
//         },
//         validation:{},
//         value: "fastest",
//         valid:true
//       },
//     },
//     order: {},
//     loading: false,
//     formIsValid:false
//   };

//   orderHandler = (event) => {
//     event.preventDefault();
//     // console.log(this.props.ingredients);
//     alert("Continuing your delicious order");
//     this.setState({ loading: true });

//     let form_data={}
//     for(let key in this.state.orderForm){
//       form_data[key]=this.state.orderForm[key].value
//     }
//     console.log(this.state.orderForm)
//     const order = {
//       ingredients: this.props.ingredients,
//       price: this.props.totalPrice,
//       orderData:form_data
//     };
//     console.log(form_data)
//     console.log(order)
//     //posting the orders json to firebase
//     axios
//       .post("/orders.json", order)
//       .then((response) => {
//         console.log(response);
//         this.setState({ loading: false });
//         this.props.history.replace("/");
//       })
//       .catch((err) => {
//         console.log(err);
//         this.setState({ loading: false });
//       });
//   };

//   inputChangeHandler =(event,inputIdentifier)=>{
//     // console.log(event.target.value)
//     let updated_form = {...this.state.orderForm};
//     let updated_form_element = {...updated_form[inputIdentifier]};
//     updated_form_element.value = event.target.value;
//     updated_form_element.valid = this.checkValidity(updated_form_element.value,updated_form_element.validation)
//     updated_form_element.touched = true;
//     updated_form[inputIdentifier]=updated_form_element;
//     //calculating the whole form validation
//     let localIsFormValid = true;
//     for(var input in updated_form){
//       localIsFormValid = localIsFormValid && updated_form[input].valid;
//     }
//     console.log("Final form validation="+localIsFormValid);
//     //calculating the whole form validation
//     this.setState({
//       orderForm:updated_form,
//       formIsValid:localIsFormValid
//     });
//   }

//   checkValidity = (value,rules)=>{
//       let isValid = true;
//       // handling the execution when input element doesnt have any validations mentioned
//       if(rules==undefined){
//         return true;
//       }
//       if(rules.required) { isValid = isValid && (value.trim())!=='' ; }
//       if(rules.minLength){ isValid = isValid && (value.length)>=rules.minLength; }
//       if(rules.maxLength){ isValid = isValid && (value.length)<=rules.maxLength; }
//       return  isValid
//   }

//   render() {
//     let form = null;
//     if (this.state.loading) {
//       form = <Spinner />;
//     } else {
//       let formElements = [];
//       for (let key in this.state.orderForm) {
//         formElements.push({
//           id: key,
//           config: this.state.orderForm[key],
//         });
//       }

//       form = (
//         <form onSubmit={this.orderHandler}>
//           {formElements.map((e) => (
//             <Input
//               key={e.id}
//               elementType={e.config.elementType}
//               elementConfig={e.config.elementConfig}
//               value={e.config.value}
//               invalid={!e.config.valid}
//               shouldValidate={e.config.validation}
//               changed={(event)=>{this.inputChangeHandler(event,e.id)}}
//               touched = {e.config.touched}
//               invalidMsg = {e.config.invalidMessage}
//             />
//           ))}
//           <Button btnType="Success" disabled={!this.state.formIsValid}>
//             Order Now
//           </Button>
//         </form>
//       );
//     }
//     return (
//       <div className={styles.ContactData}>
//         <h3>Enter the details of yours for submitting your order</h3>
//         {form}
//       </div>
//     );
//   }
// }
// export default ContactData;

// ====================PART 2================
import React, { Component } from "react";
import Button from "../../../../components/BB/UI/Button/Button";
import styles from "./ContactData.module.css";
import Spinner from "../../../../components/BB/UI/Spinner/Spinner";
import axios from "../../../../axios-orders";
import Input from "../../../../components/BB/UI/Input/Input";
import { connect } from "react-redux";
import withErrorHandler from "../../../../higher-order-components/WithErroHandler/WithErrorHandler";
import * as actionTypes from "../../../../store/BBStore/actions/index";

class ContactData extends Component {
  // componentDidMount() {
  // console.log("ContactData.js , orderHandler");
  // console.log(this.props);
  // }
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter Name",
        },
        value: "",
        validation: {
          required: true,
          minLength: 8,
        },
        valid: false,
        touched: false,
        invalidMessage: "Minimum 8 characters are required",
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter E-mail",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        invalidMessage: "Invalid Email format, Retry Again",
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter Street",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        invalidMessage: "Enter a valid street",
      },
      zipcode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter Zip Code",
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
          maxLength: 6,
        },
        valid: false,
        touched: false,
        invalidMessage: "Enter ZIPCODE having 6 digits only",
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter Country",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        invalidMessage: "Enter a country",
      },
      city: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter City",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        invalidMessage: "Enter a city",
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        validation: {},
        value: "fastest",
        valid: true,
      },
    },
    order: {},
    // loading: false,
    formIsValid: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    // console.log(this.props.ingredients);
    alert("Continuing your delicious order");
    // this.setState({ loading: true });

    let form_data = {};
    for (let key in this.state.orderForm) {
      form_data[key] = this.state.orderForm[key].value;
    }
    // console.log(this.state.orderForm);
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      orderData: form_data,
      userId:this.props.userToken
    };
    // console.log(form_data);
    // console.log(order);
    //posting the orders json to firebase
    // axios
    //   .post("/orders.json", order)
    //   .then((response) => {
    //     console.log(response);
    //     this.setState({ loading: false });
    //     this.props.history.replace("/");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     this.setState({ loading: false });
    //   });

    // now posting the axios code with the help of redux
    this.props.onOrderStart(order,this.props.token);
  };

  inputChangeHandler = (event, inputIdentifier) => {
    // console.log(event.target.value)
    let updated_form = { ...this.state.orderForm };
    let updated_form_element = { ...updated_form[inputIdentifier] };
    updated_form_element.value = event.target.value;
    updated_form_element.valid = this.checkValidity(
      updated_form_element.value,
      updated_form_element.validation
    );
    updated_form_element.touched = true;
    updated_form[inputIdentifier] = updated_form_element;
    //calculating the whole form validation
    let localIsFormValid = true;
    for (var input in updated_form) {
      localIsFormValid = localIsFormValid && updated_form[input].valid;
    }
    // console.log("Final form validation=" + localIsFormValid);
    //calculating the whole form validation
    this.setState({
      orderForm: updated_form,
      formIsValid: localIsFormValid,
    });
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
    return isValid;
  };

  render() {
    // console.log("[ContactData.js Rendering]");
    // console.log(this.props);

    let form = null;
    // if (this.state.loading) {
    if (this.props.loading) {
      form = <Spinner />;
    } else {
      let formElements = [];
      for (let key in this.state.orderForm) {
        formElements.push({
          id: key,
          config: this.state.orderForm[key],
        });
      }

      form = (
        <form onSubmit={this.orderHandler}>
          {formElements.map((e) => (
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
          ))}
          <Button btnType="Success" disabled={!this.state.formIsValid}>
            Order Now
          </Button>
        </form>
      );
    }
    return (
      <div className={styles.ContactData}>
        <h3>Enter the details of yours for submitting your order</h3>
        {form}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    loading: state.orders.loading,
    token:state.authentication.token,
    userToken:state.authentication.userId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderStart: (orderData,token) => {
      dispatch(actionTypes.purchaseBurger(orderData,token));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactData, axios));
