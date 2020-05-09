import React from "react";
import Modal from "../../components/BB/UI/Modal/Modal";
import Aux from "../BBAux";
import { Component } from "react";
const WithErrorHandler = (WrappedComponent, axios) => {
  // console.log(WrappedComponent);
  // converting functional component to class component with anonymous class
  return class extends Component {
    state = {
      error: null,
      requestInterceptor:null,
      responseInterceptor:null
    };
    // requestInterceptor=null;
    // responseInterceptor=null;
    componentDidMount() {
      let reqInterceptor = axios.interceptors.request.use((request) => {
        this.setState({ error: null });
        return request;
      });
      let resInterceptor = axios.interceptors.response.use(
        (response) => response,
        (error) => {
          this.setState({ error: error });
        }
      );
      this.setState({
          requestInterceptor:reqInterceptor,
          responseInterceptor:resInterceptor
      })
    //   this.requestInterceptor = axios.interceptors.request.use((request) => {
    //     this.setState({ error: null });
    //     return request;
    //   });
    //   this.responseInterceptor = axios.interceptors.response.use(
    //     (response) => response,
    //     (error) => {
    //       this.setState({ error: error });
    //     }
    //   );
    //   this.setState({
    //       requestInterceptor:requestInterceptor,
    //       responseInterceptor:responseInterceptor
    //   })
    }
    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };
    componentWillUnmount(){
        // this.setState({
        //     requestInterceptor:null,
        //     responseInterceptor:null
        // })
        console.log("In withErrorHandler Comp, componentWillUnmount now");
        // axios.interceptors.request.eject(this.requestInterceptor);
        // axios.interceptors.response.eject(this.responseInterceptor);
        this.setState({
            requestInterceptor:null,
            responseInterceptor:null
        });
        console.log(this.state.requestInterceptor,this.state.responseInterceptor);
    }
    render() {
    //   console.log(this.state.error);
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : ""}
          </Modal>
          <WrappedComponent {...this.props}></WrappedComponent>
        </Aux>
      );
    }
  };
};
export default WithErrorHandler;
