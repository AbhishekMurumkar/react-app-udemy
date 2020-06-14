import React, { Component } from 'react';
import Persons from './Person/Persons';
// now implementing the store
import MyStore from "./MyStore/Assignment5Store";
import { Provider } from "react-redux";

class Assignment5 extends Component {
    render() {
        return (
            <Provider store={MyStore}>
                <div className="App">
                    <ol>
                        <li>Turn this app into one which does NOT use local state (in components) but instead uses Redux</li>
                    </ol>
                    <Persons />
                </div>
            </Provider>
        );
    }
}

export default Assignment5;