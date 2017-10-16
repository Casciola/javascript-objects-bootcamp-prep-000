var playlist = {Drake: 'Forever'};

function updatePlaylist(playlist, artistName, songTitle)  {
  return Object.assign({}, playlist, {[artistName]: songTitle});
};

function removeFromPlaylist(playlist, artistName) {
  playlist = delete playlist.artistName;
  return playlist;
};
