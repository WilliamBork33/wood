//Importing React Components
import React from "react";
import "./SocialLinks.css";

//Instruction Div
const Instructions = props => (
    <div className="instructionsbox">
         <div class="social-links">                
                <a href="https://twitter.com/williambork" target="_blank" class="icon-twitter">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://github.com/WilliamBork33" target="_blank" class="icon-github">
                    <i class="fab fa-github"></i>     
                </a>
                <a href="https://www.youtube.com/user/WilliamNAaronBork/videos" target="_blank" class="icon-youtube">
                    <i class="fab fa-youtube"></i>    
                </a>
                <a href="https://www.linkedin.com/in/william-n-aaron-bork-aa865152/" target="_blank" class="icon-linkedin">
                    <i class="fab fa-linkedin"></i>    
                </a>       
            </div>
    </div>
    
);

//Export Component for Use in the Rest of Application.
export default Instructions;