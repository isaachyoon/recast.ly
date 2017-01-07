class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      videos: this.props.videos, 
      initialVideo: this.props.videos[0]

    };
    this.isClicked = this.isClicked.bind(this);
  }

  isClicked(event) {
    this.setState({
      initialVideo: event
    });
    
  }

  render () {
    return (
      <div>
      <Nav />
        <div className="col-md-7">
         <VideoPlayer video={this.state.initialVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} click={this.isClicked}/>
        </div>        
      </div>
    );
  }
} 

// (props) => ();

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
