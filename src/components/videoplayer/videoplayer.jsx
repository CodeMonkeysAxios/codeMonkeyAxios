import YouTube from "react-youtube";
import React from "react";

class Videoplayer extends React.Component {
  render() {
    const opts = {
      height: "390",
      float:"right",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 2
      }
    };

    return (
      <div>
        <h1>Flappy Bird</h1>
        <h1>Lo que vamos a crear en este tutorial</h1>
        <iframe allowtransparency="true" width="485" height="402" src="//scratch.mit.edu/projects/embed/246542038/?autostart=false" frameborder="0" allowfullscreen></iframe>

      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Videoplayer;
