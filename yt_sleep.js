// for use in youtube enahcer
// will pause a youtube video after 'timeout' miuntes

// timeout in minutes
timeout = 1;

// uncomment this if you want to be sure the script started
// i tend to be paranoid since the touchpad on my laptop is unreliable
alert(`Setting ${timeout} minute timeout`);

// after the timeout ran out, find whatever player there is
// and pause it. this works on autoplay and even when
// loading a new video manually in the meantime
setTimeout(function() {
    if (document.getElementById("movie_player") != null) {
        player = document.getElementById("movie_player").querySelector("video");
        player.pause();
        //alert("paused");
    } else {
        console.log("could not find player");
    }
}, (timeout * 60 * 1000));

