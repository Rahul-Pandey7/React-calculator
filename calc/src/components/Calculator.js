import React from 'react';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    btnPressed = (e) => {
        this.props.btnPressed(e.target.name)
    }
    render() {
        console.log(this.props.result)
        return (
            <div>
                <div class="container">
                    <div className="input">
                        <div style={{ color: "black", border:"1px dotted black" }}>{this.props.values}</div>
                        <div>{this.props.result}</div>
                        </div> 
                    <div class="btn-container">
                        <button onClick={this.btnPressed} class="btns" name="(" style={{ background: "#5e4bb6" }}>(</button>
                        <button onClick={this.btnPressed} class="btns" name=")" style={{ background: "#5e4bb6" }}>)</button>
                        <button onClick={this.btnPressed} class="btns" name="c" style={{ background: "#5e4bb6" }}>C</button>
                        <button onClick={this.btnPressed} class="btns" name="/" style={{ background: "#5e4bb6" }}>/</button>
                        <button onClick={this.btnPressed} class="btns" name="7">7</button>
                        <button onClick={this.btnPressed} class="btns" name="8">8</button>
                        <button onClick={this.btnPressed} class="btns" name="9">9</button>
                        <button onClick={this.btnPressed} class="btns" name="+" style={{ background: "#5e4bb6" }}>+</button>
                        <button onClick={this.btnPressed} class="btns" name="4">4</button>
                        <button onClick={this.btnPressed} class="btns" name="5">5</button>
                        <button onClick={this.btnPressed} class="btns" name="6">6</button>
                        <button onClick={this.btnPressed} class="btns" name="*" style={{ background: "#5e4bb6" }}>*</button>
                        <button onClick={this.btnPressed} class="btns" name="1">1</button>
                        <button onClick={this.btnPressed} class="btns" name="2">2</button>
                        <button onClick={this.btnPressed} class="btns" name="3">3</button>
                        <button onClick={this.btnPressed} class="btns" name="-" style={{ background: "#5e4bb6" }}>-</button>
                        <button onClick={this.btnPressed} class="btns" name="0">0</button>
                        <button onClick={this.btnPressed} class="btns" name=".">.</button>
                        <button onClick={this.btnPressed} className="clear" name="x" style={{ background: "#0f1570" }}>CE</button>
                        <button onClick={this.btnPressed} className="equal" name="=" style={{ background: "#42b9f5" }}>=</button>
                    </div>
                </div>
            </div>
        )
    }
}
