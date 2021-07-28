import React, { Component } from "react";
// if the state or props is changed (using setState())the
//Update cicle is triggred automaticly
//for others sideEffects (API call or updating the DOM ...)we need to call the Update life cycle methodes
//
class ClassCounterOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }
  //******* CONDITIONAL UPDATE ***********/
  /*by default component didUpdate 
  will automaticly run after every
  state ,props changes 
  to prevent this we pass tow params 
  to componentDidUpdate(previousProps,previousState)
  */
  componentDidUpdate(prevProps, prevState) {
    
    if (prevState.count !== this.state.count) {
      console.log("Updating doc title");
      document.title = `Clicked ${this.state.count} times`;
    }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />

        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounterOne;
