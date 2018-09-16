import YouTube from "react-youtube";
import React from "react";

class Tutorial extends React.Component {
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

      <YouTube videoId="IBB-m1lfaqY" opts={opts} onReady={this._onReady} />
      <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQjGv_icxT8i33DJyXjTp3hZQ8Mc0HYUTVxChTR1dwKLQbzcx-8pQKDlwPZKj6wcrwSoUP9Acaz9Qko/embed?start=false&loop=false&delayms=3000" frameborder="0" width="500" height="390" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Tutorial;
