var React=require('react');
var NavLink=require('./NavLink');
var Navbar=React.createClass({

render:function()
{
    return(
<div>
  <div className="container-fluid">

        <ul className="nav navbar-nav">
          <li>
            <NavLink to="/form">myform</NavLink>
          </li>

        </ul>
      </div>
      </div>
    );
}
});

module.exports=Navbar;
