import React, { Component } from 'react'

class IntervalClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    //create timer : every second we execute the tick method
    componentDidMount(){
        this.Interval = setInterval(this.tick,1000)
    }
    componentWillUnmount(){
        clearInterval(this.Interval)
    }
    tick = ()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <h1>
               {this.state.count} 
            </h1>
        )
    }
}

export default IntervalClassCounter
