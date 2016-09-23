var React=require('react');
var ReactDOM=require('react-dom');
var {hashHistory,Route,Router,IndexRoute}=require('react-router');

var Navbar = require('./component/Navbar');
var FormSubmit = require('./component/FormSubmit');


var MainComponent=React.createClass({

  render:function()
  {
    return(
      <div>

	<Navbar/>
  <br/><br/><br/><br/>
{this.props.children}
<br/><br/>
      </div>
    );
  }
});

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={MainComponent}>
        <IndexRoute component={FormSubmit}/>
        <Route path="/form" component={FormSubmit}/>
      </Route>
  </Router>,document.getElementById('app'));
