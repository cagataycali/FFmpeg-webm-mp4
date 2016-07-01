var songs = require('./lib/songs');
var ffmpeg = require('./lib/ffmpeg');
var download = require('./lib/download');

/*
  Process params:
  @param var Song name : 312321321312312321
  @param var Output    : test
*/
// ffmpeg.process(songs.getRandomMusic(), 'test');
download.downloadAll();
