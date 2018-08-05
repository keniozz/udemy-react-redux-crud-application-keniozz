import React, {Component}from 'react';
import { connect } from 'react-redux';

import {increment, decrement} from '../actions';　// actionCreatorのimport
　
class App extends Component{

  /*
    // React-Reduxの世界では初期化不要 //
  constructor(props){
    super(props);
    this.state = { count : 0};
  }

  actionCreator -> Reducer で実現されるため不要 //

  handlePlusButton=()=>{
    this.setState({ count : this.state.count + 1});
  }

  handleMinusButton=()=>{
    this.setState({ count : this.state.count - 1});
  }
*/

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

// stateの情報からこのcomponentで必要なものを取り出し、component内のpropsとしてマッピングする機能
const mapStateToProps = state => ({ value: state.count.value });

// あるactionが発生したときに、reducerにtypeに応じた状態遷移を実行するのがdispatch()
const mapDispachToProps = dispatch => ({ 
  increment: () => dispatch(increment()), 
  decrement: () => dispatch(decrement())
 })

// 以下のように書き換え可能
// const mapDispachToProps = ({increment, decrement});


export default connect(mapStateToProps, mapDispachToProps)(App)
