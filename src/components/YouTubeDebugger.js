// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            } 
        }
    }

    handleBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        }, () => console.log(this.state.settings))
    }

    handleRes = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        }, () => console.log(this.state.settings))
    }

    render() {
        return (
          <div>
            <button className="bitrate" onClick={this.handleBitrate}>bitrate</button>
            <button className="resolution" onClick={this.handleRes}>resolution</button>
          </div>
        );
      }

}

export default YouTubeDebugger;