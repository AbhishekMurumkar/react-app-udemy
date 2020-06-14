import React, {Component} from "react";
import {connect} from "react-redux";
import CounterControl from "../../../components/ReduxComponents/CounterControl/CounterControl";
import CounterOutput from "../../../components/ReduxComponents/CounterOutput/CounterOutput";
import * as actionTypes from "../../../store/actions/MyActions";

class Counter extends Component {

  render() {
    console.log(this.props);
    return (<div>
      {/* <CounterOutput value={this.state.counter} /> */}
      <CounterOutput value={this.props.myCounterAtChild}/> {/* <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} /> */}
      <CounterControl label="Increment" clicked={this.props.onIncrementMyCounter}/> {/* <CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'dec' )}  /> */}
      <CounterControl label="Decrement" clicked={this.props.onDecrementMyCounter}/> {/* <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  /> */}
      <CounterControl label="Add 5" clicked={this.props.onAddMyCounter}/> {/* <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  /> */}
      <CounterControl label="Subtract 5" clicked={this.props.onSubMyCounter}/>
      <hr/>
      <button onClick={this.props.onStoreResult.bind(this, this.props.myCounterAtChild)}>
        Store Result
      </button>
      <ul>
        {
          this.props.myStoredResults.map((e) => {
            // return <li onClick={()=>{console.log("clicked");this.props.onDeleteResult(e.id)}} key={e.id}>{e.id}-{e.value}</li>
            return (<li onClick={this.props.onDeleteResult.bind(this, e.id)} key={e.id}>
              {e.id}-{e.value}
            </li>);
          })
        }
      </ul>
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    // this is without using combineReducers
    // myCounterAtChild: state.counter,
    // myStoredResults: state.results,

    // this  is  using  combineReducers
    myCounterAtChild: state.counterAtGlobalState.counter,
    myStoredResults: state.resultsAtGlobalState.results
  };
};

const mapDispatchToPros = (dispatch)=>{
  return{
    onIncrementMyCounter: () => dispatch(actionTypes.incrementCounter()),
    onDecrementMyCounter: () => dispatch(actionTypes.decrementCounter()),
    onAddMyCounter:       () => dispatch(actionTypes.addToCounter(5)),
    onSubMyCounter:       () => dispatch({type: actionTypes.subFromCounter(5)}),
    onStoreResult:        (currentCounter) => {
      return dispatch({type: actionTypes.storeResult(currentCounter)});
    },
    onDeleteResult:       (id) => {
      return dispatch({type: actionTypes.deleteStoredNumber()});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(Counter);
