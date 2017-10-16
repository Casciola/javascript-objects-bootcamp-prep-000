var playlist = {Drake: 'Forever'};

function updatePlaylist(playlist, artistName, songTitle)  {
  return Object.assign({}, playlist, {[artistName]: songTitle});
};

function removeFromPlaylist(playlist, artistName) {
  var newPlaylist = delete playlist.artistName;
  return newPlaylist;
};
