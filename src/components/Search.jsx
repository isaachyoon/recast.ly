var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={() => props.search($('input').val())} />
    <button className="btn hidden-sm-down" onClick={() => props.search($('input').val())}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

//should receive information - send it to APP and App should send that information to the searchYoutube
//what is the callback for?

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
