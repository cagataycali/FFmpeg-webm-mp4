var exec = require('child_process').exec;

/*
  Process params:
  @ Song name : 312321321312312321
  @ Output    : test
*/
exports.process = function(song, output) {
  var cmd = `ffmpeg -i ${output}.webm -i musics/${song}.mp3 -shortest ${output}.mp4`;
  exec(cmd, function(error, stdout, stderr) {
    if (error) {
      console.log(error);
    } else {
      console.log('Process ended.');
    }
  });
}
