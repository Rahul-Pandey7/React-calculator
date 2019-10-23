import React from 'react';
import Calculator from './Calculator';
import {connect} from 'react-redux';
import Calhistory from './Calhistory';
import { calculation, clearCalculation } from './actions';

 class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            result:'',
            values:''
        }
    }
    btnPressed=(btns)=>{
        if(btns == "="){
            this.props.add(this.state.values)
            try{
                this.setState({
                    result:eval(this.state.values),
                    // values:this.state.values+btns
                })
            }
            catch (e) {
                this.setState({
                    result:"error"
                })
            }          
        }
        else if(btns=="c"){
            this.props.clear()
            this.setState({
                result:0,
                values:''
            })
        }
        else if(btns=='x'){
            this.setState({
                values:this.state.values.slice(0,-1)
            })
        }
        else{
            this.setState({
                values:this.state.values+ btns
            })
        }
        // this.props.add(this.state.values)     
    }

    render(){
        
        return (
            <div>  
                <Calculator values={this.state.values} result={this.state.result} btnPressed={this.btnPressed}/>
                <Calhistory/>
            </div>
        )
    }
}
const actionCreators = {
    calculation,
    clearCalculation
}

const mapStateToProps = state => {
    return {
        result: state.result,
        CalculationArray: state.calculationArray
    };
};
const mapDispatchToProps = dispatch => {
    return {
        add: item => dispatch(calculation(item)),
        clear: item => dispatch(clearCalculation(item))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
