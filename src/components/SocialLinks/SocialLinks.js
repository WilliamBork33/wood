////////////////////
// COMPONENT FOR SHOWING SOCIAL MEDIA ICONS & LINKS
////////////////////

//Importing React Components
import React from "react";
import "./SocialLinks.css";

class SocialLinks extends React.Component {
  render() {
    return (
      <div className="instructionsbox">
        <div class="social-links">
          <a
            href="https://twitter.com/williambork"
            target="_blank"
            rel="noopener noreferrer"
            class="icon-twitter"
          >
            <i class="fab fa-twitter" />
          </a>
          <a
            href="https://github.com/WilliamBork33"
            target="_blank"
            rel="noopener noreferrer"
            class="icon-github"
          >
            <i class="fab fa-github" />
          </a>
          <a
            href="https://www.youtube.com/user/WilliamNAaronBork/videos"
            target="_blank"
            rel="noopener noreferrer"
            class="icon-youtube"
          >
            <i class="fab fa-youtube" />
          </a>
          <a
            href="https://www.linkedin.com/in/william-n-aaron-bork-aa865152/"
            target="_blank"
            rel="noopener noreferrer"
            class="icon-linkedin"
          >
            <i class="fab fa-linkedin" />
          </a>
        </div>
      </div>
    );
  }
}

//Export Component for Use in the Rest of Application.
export default SocialLinks;
