import React from 'react';
import { Component } from 'react';

const asyncComponent = (component) => {
    return class extends Component {
        state = {
            component: null
        }
        componentDidMount() {
            component().then((params) => {
                this.setState({ component: params.default })
            })
        }
        render() {
            const C = this.state.component;
            return C ? <C {...this.props} /> : null;
        }
    }
}
export default asyncComponent;