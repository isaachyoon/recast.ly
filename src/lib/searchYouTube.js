var searchYouTube = (option, callback) => {
//API KEY:  AIzaSyBi_euMXLbVp7D1RlW0P_hiHTgHxN-N4Ug
//api key variable: YOUTUBE_API_KEY
  // $.get('https://www.googleapis.com/youtube/v3/search', 
  //   {
  //     query: option.query,
  //     max: option.max,
  //     key: YOUTUBE_API_KEY
  //   })
  // .done(function({data}) {
  //   callback(data)
  // .fail(function(jqxhr, textStatus, error){var err = textStatus + ", " + error;
  //   console.log( "Request Failed: " + err)})
  // });

  url = 'https://www.googleapis.com/youtube/v3/search';
  var params = {
    part: 'snippet',
    key: 'AIzaSyBi_euMXLbVp7D1RlW0P_hiHTgHxN-N4Ug',
    q: option.query,
    max: option.max
  };
  
  $.get(url, params, function (data) {
      // console.log(data.items);
    callback(data.items);
    // return data.items;
  });
};

window.searchYouTube = searchYouTube;
