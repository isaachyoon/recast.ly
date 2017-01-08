class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      videos: this.props.videos, 
      initialVideo: this.props.videos[0],
      query: 'cat'
    };

    console.log('app', this.props);
    this.isClicked = this.isClicked.bind(this);
    //**must bind the function in constructor to find the context******************************
    this.searchClicked = this.searchClicked.bind(this);
    //call searchYouTube when app is initialized
    //how would we load live data when app is initialized?
      // searchYouTube({
      //   query: 'cat',
      //   max: 10,
      //   key: YOUTUBE_API_KEY
      // }, function(j) { console.log(j); });
  }

  isClicked(event) {
    this.setState({
      initialVideo: event
    });
  }
   // var queryResult = searchYouTube(, () => {

   //  });
   //  console.log('queryResult', queryResult);
   //  this.setState({
   //    videos: queryResult
   //  });
  



  setVideos(items) {
    this.setState({
      videos: items,
      initialVideo: items[0]
    });
  }

  searchClicked(event) {
    searchYouTube({
      query: event,
      max: 10,
      key: YOUTUBE_API_KEY
    }, this.setVideos.bind(this));

  }
  
  //searchClick will be invoked with returned object from searchYouTube.js
  componentWillMount() {
    searchYouTube({
      query: 'cats',
      max: 10,
      key: YOUTUBE_API_KEY
    }, this.setVideos.bind(this));
  }




  render () {
    // console.log("query result at render", this.props.videos)
    return (
      <div>
      <Nav searchYoutube={this.searchClicked}/>
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
