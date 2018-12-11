{
    $('#album-title').text(album.title);
    $('img#album-cover-art').attr('src', album.albumArtUrl);
    $('.artist').text(album.artist);
    $('#release-info').text(album.releaseInfo);
    //$('#album-details').text('src', album.albumDetails);
    //$('#album-info').(album.albumInfo);
}
