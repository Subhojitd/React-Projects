import { Component } from 'react';
import './index.css'
class CounterApp extends Component {
    state = {count:0}

    onIncrement = () => {
        this.setState({count:this.state.count+1})
    }
    onDecrement = () => {
        this.setState({count:this.state.count-1})
    }
    onReset = () => {
        this.setState({count:0})
    }

    render() {
        const {count} = this.state
        return(
        <div className="app-container">
            <div className="content-container">
                <h1 className="heading">Counter</h1>
                <p className="counter">{count}</p>
                <div>
                    <button className="decrease-btn" type="button" onClick={this.onDecrement}>Decrement</button>
                    <button className="reset-btn" type="button" onClick={this.onReset}>Reset</button>
                    <button className="increase-btn" type="button" onClick={this.onIncrement}>Increment</button>
                </div>
            </div>
        </div>)
    }
}

export default CounterApp;
