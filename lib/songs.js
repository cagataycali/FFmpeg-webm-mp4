var songs = [ 'ff562aa5d41147f7a7cb8991af28cfc0',
'31d5621d73d04a8da0203ea1905ecc33',
'e71ffd91f1034bf59487fc4db8040057',
'c6d0035b9f214319b73f068918cb8cc5',
'cda948cb24594d49ac92a2b5236e721b',
'4d67316083b94661993f653677697910',
'c81f33e05aaf4442a9355202c138b64b',
'335fa48d1e2349e7954a3325a0af762a',
'146f055b94ef44068925cbd2c3f7bdf4',
'c7731505035844349fc979d4e9c9fcf1',
'5ed276bb261741fb8141730bd64e21a2',
'77fa80c84c3e49769ef00ed6b11bc870',
'c1fd2f5db0bd4004bfbd0365ded77314',
'7d358d43e819412c8501fc077bbd0be9',
'8470fa761e8f4a00b62d78eda3642347',
'8b5c04a284e548ca957dc32cfea24451',
'ff31e14505564060b51090bf01d47d9b',
'e8ef6b0d04d04d69bd7a0eea09b8b95a',
'f376758a831046c0ae7a9c85ce2a7b8f',
'cf87bc33bc144f68ad069b0ab5084ff5',
'a1ce3d7894fe4e59aa28c895f3c1c8af',
'ea7f630db1b748908312cf1440262494',
'27606f3f763f4c40b69fae707f7e4c98',
'3d680b1e262c44b29d04ac5863dd1295' ];
/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

/**
* Get random music name
*/
exports.getRandomMusic = function() {
  shuffle(songs);
  var song = songs[0];
  return song;
};

/**
* Get all songs from list.
*/
exports.getAllSongs = function() {
  return songs;
};
