import React from "react"
import {connect} from 'react-redux';

class Calhistory extends React.Component{
	render(){
        let arr = this.props.calculationArray.filter((item)=>{
            return item != undefined
        })
		return(
			<div>
                <h1>history of calculation</h1>
			<ul>
				{arr.map((items)=>{
					return ( <li> {items}  =  {eval(items)} </li>)
				})}
			</ul>
			</div>
		);
	}
}

const mapStateToProps = state =>{
	return {
		calculationArray : state.calculationArray
	}
}
export default connect(mapStateToProps)(Calhistory);