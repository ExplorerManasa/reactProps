import React from 'react'

class DemoExample extends React.Component{
		state={
			s:this.props.price,
			s:this.props.cost
	}
	 render(){
	 	return(
	 		<div>
	 		  <p>{this.props.cost}</p>
	 		  <h1>{this.props.price}</h1>
	 		</div>
			)
	 
	 }	

}
export default DemoExample