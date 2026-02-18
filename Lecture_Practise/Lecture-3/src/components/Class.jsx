
import { Component } from "react"

class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {
      count : 0
    }
  }

  increment = () => {
    this.setState({count:this.state.count + 1})
  }

  decrement = () => {
    this.setState({count:this.state.count - 1})
  }

  render(){
    return(
      <>
        <h2 className="heading">Class Counter</h2>
        <h3 className="heading">{this.state.count}</h3>
        <button className="btn" onClick={this.increment}>increment</button>
        <button className="btn" onClick={this.decrement}>decerement</button>
      </>
    )
  }
}

export default Counter;
