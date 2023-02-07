import React, { Component } from 'react';

export class  Counter extends React.Component {
 constructor(props) {
    super(props);
    this.state={ count: 50}
    this.handleIncrement.handleIncrement.bind(this)
    this.handleDecrement.handleDecrement.bind(this)
}
 handleIncrement() {
  //this.state({count:50});
  this.setState((prev)=>{return{count:prev.count-1}
})

 }

 handleDecrement() {
  //this.setState({count: 10});
  this.setState((prev)=>{
    return {count: prev.count +1}
});

 }


        render() {
        return(
            <div className = 'counter'>
                <span className ='numbers'>{this.state.count}</span>
                <span className ='button'>
                    <button onClick={this.handleIncrement}> + </button>
                    <button onClick={this.handleDecrement} > - </button>
                </span>

            </div>
        )
    }
}


export default Counter;




