import React, {Component}from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import {readEvents} from '../actions';　// actionCreatorのimport
　
class EventsIndex extends Component{  

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
  componentDidMount(){
    console.log("start DidMount");
    this.props.readEvents();
    console.log("end DidMount");
  }

  renderEvents(){
    return _.map(this.props.events, event =>
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    )
  }

  render(){
    // const props = this.props;

    return (
        <table>
          <thead>  
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>

          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>

    );
  }
}

// stateの情報からこのcomponentで必要なものを取り出し、component内のpropsとしてマッピングする機能
const mapStateToProps = state => ({ events: state.events });

const mapDispachToProps = ({ readEvents });

export default connect(mapStateToProps, mapDispachToProps)(EventsIndex);
