var React=require("react");
var FormSubmitValues=require('./FormSubmitValues')
var FormSubmit=React.createClass({


	getInitialState:function(){
  		return({Name:"",Type:"",Locate:"",Participants:"",StartDate:"",EndDate:"",data:[]});
    },

    handleName:function(event){
    	this.setState({Name:event.target.value})
    },

    handleType:function(event){
    	this.setState({Type:event.target.value})
    },

    handleLocation:function(event){
    	this.setState({Locate:event.target.value})
    },
    handleParticipants:function(event){
    	this.setState({Participants:event.target.value})
    },
    handleStartDate:function(event){
    	this.setState({StartDate:event.target.value})
    },
    handleEndDate:function(event){
    	this.setState({EndDate:event.target.value})
    },

    componentDidMount:function(){
    	this.getData();
  	},


	postData:function()
	  {

	    $.ajax({
	          url: 'http://localhost:8080/form/save',
	          dataType: 'json',
	          contentType: "application/json",
	          type: 'POST',
	          data: JSON.stringify({'inputname':this.state.Name, 'inputtype':this.state.Type, 'inputlocate':this.state.Locate,inputparticipants:this.state.Participants,inputstartdate:this.state.StartDate,inputenddate:this.state.EndDate}),
	          success: function(data)
	          {
	            console.log("Success");
	            this.setState({Name:"",Type:"",Locate:"",Participants:"",StartDate:"",EndDate:""});

	          }.bind(this),

	          error: function(xhr, status, err) {
	            console.error(this.state.url, status, err.toString());
	          }.bind(this)
	        });


	    this.getData();

	  },

	  getData:function()
	  {

	    $.ajax({
	          url: 'http://localhost:8080/form/getData',
	          dataType: 'json',
	          type: 'GET',

	          success: function(data)
	          {
	            console.log("Success");
	            this.setState({data:data});
	          }.bind(this),

	          error: function(xhr, status, err) {
	            console.error(this.state.url, status, err.toString());
	          }.bind(this)
	        });

	  },


	render:function(){

		var getdata=this.state.data.map(function(data) {

      		return(
        		<FormSubmitValues NameValue={data.inputname} TypeValue={data.inputtype} LocateValue={data.inputlocate} Participants={data.inputparticipants} StartDate={data.inputstartdate} EndDate={data.inputenddate}/>
      		);
    	});
		return(

			<div className="container">
				<div className="Participants">
		            <div className="container-fluid">
			            <div className="row">

				            <div className="col-md-3">
				            </div>

				            <div className="col-md-9">
				            	<h1 className="text-center">Wave Management App</h1>
								  <form action="/saveee" method="POST">

								    <div className="form-group">
								      <label for="Name">Name:</label>
								      <input value={this.state.Name} onChange={this.handleName} name="inputname" type="text" className="form-control" id="Name" placeholder="Enter name"></input>
								    </div>

								    <div className="form-group">
								      <label for="Type">Type:</label>
								      <input value={this.state.Type} onChange={this.handleType} name="inputtype" type="text" className="form-control" id="Type" placeholder="Enter type"></input>
								    </div>

							 		<div className="form-group">
								      <label for="Locate">Locate:</label>
								      <input value={this.state.Locate} onChange={this.handleLocation}  name="inputlocate" type="text" className="form-control" id="Locate" placeholder="Enter Location"></input>
								    </div>

								    <div className="form-group">
								      <label for="Participants">Participants:</label>
								      <input value={this.state.Participants} onChange={this.handleParticipants} name="inputparticipants" type="text" className="form-control" id="Participants" placeholder="Enter Participants number"></input>
								    </div>

								    <div className="form-group">
								      <label for="StartDate">StartDate:</label>
								      <input value={this.state.StartDate} onChange={this.handleStartDate}  name="inputstartdate" type="text" className="form-control" id="StartDate" placeholder="Enter StartDate"></input>
								    </div>

								    <div className="form-group">
								      <label for="EndDate">EndDate:</label>
								      <input value={this.state.EndDate} onChange={this.handleEndDate} name="inputenddate" type="text" className="form-control" id="EndDate" placeholder="Enter End date"></input>
								    </div>


								    <button type="button" className="btn btn-warning" onClick={this.postData}>Submit</button>
								</form>


							</div>


					    </div>
					    <div className="row">
					    	<div className="col-md-2">
				            </div>
				            <div className="col-md-8">
				            {getdata}
				            </div>
				            <div className="col-md-2">
				            </div>
					    </div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports=FormSubmit;
