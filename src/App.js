import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const store = this.props.store
    const num = store.getState()
    return (
        <div>
          <h1>现在的机枪{num}把</h1>
          <button onClick={()=>{store.dispatch(this.props.addGun())}}>申请机枪</button>
          <button onClick={()=>{store.dispatch(this.props.minusGun())}}>上交机枪</button>
          <button onClick={()=>{store.dispatch(this.props.addAsync())}}>两天后上交机枪</button>
        </div>
    )
  }
}

export default App;
