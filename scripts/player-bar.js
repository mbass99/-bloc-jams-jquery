{
    $('button#play-pause').on('click', function () {
        layPauseAndUpdate();
        $(this).attr('playState', player.playState);
    });

    $('button#next').on('click', function () {
        if (player.playState !== 'playing') {
            return;
        }

        const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
        const nextSongIndex = currentSongIndex + 1;
        if (nextSongIndex >= album.songs.length) {
            return;
        }

        const nextSong = album.songs[nextSongIndex];
        playPauseAndUpdate(nextSong);
    });


    $('button#previous').click(function () {
        if (player.playState !== 'playing') {
            return;
        }

        const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
        const previousSongIndex = currentSongIndex - 1;
        if (currentSongIndex === 0) {
            return;
        }

        const previousSong = album.songs[previousSongIndex];
        layPauseAndUpdate(previousSong);
    });

   $('#time-control input').on('input', function (event) {
       player.skipTo(event.target.value);
   });

    setInterval(() => {
        if (player.playState !== 'playing') {
            return;
        }
    const currentTime = player.getTime();
     const duration = player.getDuration();
     const percent = (currentTime / duration) * 100;
        $('#time-control .current-time').text( currentTime );
         $('#time-control .total-time').text( player.currentTime(DURATION) );
      $('#time-control input').val(percent);

    $('#volume-control input').on('input', function (event) {
        player.setVolume(event.target.value);
    })
};
                
                
                }
                