class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isToggleOn: true,
      videos: this.props.videos

    };
    this.isClicked = this.isClicked.bind(this);

  }

  isClicked() {
    console.log('clicked');
    this.setState({
      isToggleOn: !(this.state.isToggleOn)
    });
  }

  render () {
    return (
      <div>
      <Nav />
        <div className="col-md-7">
         <VideoPlayer video={this.state.videos[0]}/>
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
