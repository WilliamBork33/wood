//Importing React Components
import React from "react";
import "./Navigation.css";

//Scoring Box Div
const Navigation = props => (
    
   
    <div class="col-md-12">
        <a class="btn btn-outline-primary btn-lg" href="index.html" id="btn-nav-index" role="button"><h6>Home</h6></a>
        <a class="btn btn-outline-primary btn-lg" href="about.html" id="btn-nav-about" role="button"><h6>About Us</h6></a>
        <a class="btn btn-outline-primary btn-lg" href="recentworks.html" id="btn-nav-recentworks" role="button"><h6>Recent Works</h6></a>   
    

    <div className="buttonGroup">

<button href="index.html" id="btn-nav-index">Home</button>
<button href="about.html" id="btn-nav-about" >About Us</button>
<button href="recentworks.html" id="btn-nav-recentworks">Recent Works</button>

</div>
    
    </div>



);

//Export Component for Use in the Rest of Application.
export default Navigation;
