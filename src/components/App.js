import React, {Component}from 'react';
import { connect } from 'react-redux';

import {increment, decrement} from '../actions';

class App extends Component{

  // React-Reduxの世界では初期化不要 //

  // constructor(props){
  //   super(props);
  //   this.state = { count : 0};
  // }

  // actionCreator -> Reducer で実現されるため不要 //

  // handlePlusButton=()=>{
  //   this.setState({ count : this.state.count + 1});
  // }

  // handleMinusButton=()=>{
  //   this.setState({ count : this.state.count - 1});
  // }

  render(){
    const props = this.props;

    return (
      <React.Fragment>
        <div> count: { props.value } </div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ value: state.count.value });

const mapDispachToProps = dispatch => ({ 
  increment: () => dispatch(increment()), 
  decrement: () => dispatch(decrement())
 })

export default connect(mapStateToProps, mapDispachToProps)(App)
