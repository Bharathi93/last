var React=require("react");

var FormSubmitValues=React.createClass({

	render:function(){
		return(
				<div className="container">
				<div className="row">
				<div className="col-md-12">


			<h2>Name:</h2>			{this.props.NameValue} <br/>
			<h2>Type:</h2>				{this.props.TypeValue} <br/>
			<h2>Locate:</h2>				{this.props.LocateValue} <br/>
			<h2>Participants:</h2>				{this.props.Participants} <br/>
			<h2>StartDate</h2>				{this.props.StartDate} <br/>
			<h2>EndDate:</h2>				{this.props.EndDate} <br/>

				</div>
				</div>
				</div>
		);
	}
});

module.exports=FormSubmitValues;
