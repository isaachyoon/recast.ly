var VideoList = (props) => {

  return (
    <div className="video-list media">
    {props.videos.map((video, index) => {
      return (
          <VideoListEntry video={video} click={props.click} key={index}/>
      );
    }
    )}
    </div>
    );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
//export default VideoList;

//seperating this won't work because each video has its own click handler.
  //<VideoListEntry click={props.click} />
