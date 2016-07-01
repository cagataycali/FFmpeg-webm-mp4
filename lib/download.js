var fs = require('fs');
var request = require('request');
var songs = require('./songs');


var download = function(uri, filename, callback) {
  request.head(uri, function(err) {
    try {
      request(uri).pipe(fs.createWriteStream(`musics/${filename}`)).on('close', callback);
    } catch (e) {
      console.log(`Kabuumm file does not exist ${uri}`);
    }
    if (err) {
      console.log('error', err);
    }
  });
};

exports.downloadAll = function downloadAll() {
  var allSongs = songs.getAllSongs();
  var baseUri = 'http://art-list.io/uploads/';
  for (var i = 0; i < allSongs.length; i++) {
    var uri = `${baseUri}${allSongs[i]}.mp3`;
    download(uri, allSongs[i] + '.mp3', function() { // When download finised
      console.log(`Downloaded`);
    });
  }
}
