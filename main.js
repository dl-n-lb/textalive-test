const { Player } = TextAliveApp;

const canvas = document.getElementById("render-canvas");
const gl = canvas.getContext("webgl2");
console.log(gl);

const player = new Player({
    app: {
	token: "PC1EhJwV93I5lJTE",
    },
    mediaElement: canvas
});

player.addListener({
    onAppReady: on_app_ready,
    onVideoReady: on_video_ready,
    onTimeUpdate: on_time_update,
    onAppParameterUpdate: on_app_parameter_update,
});



function on_app_ready(app) {
    if (!app.songUrl) {
	player.createFromSongUrl(
	    "https://piapro.jp/t/Rejk/20240202164429", {
	    video: {
		// Music Map Correction History
		beatId: 4592298,
		chordId: 2727638,
		repetitiveSegmentId: 2824329,
		// Lyric timing correction history: https://textalive.jp/lyrics/piapro.jp%2Ft%2FRejk%2F20240202164429
		lyricId: 59418,
		lyricDiffId: 13965
	    },
	});
    }
    player.volume = 1;
    document.getElementById("play-button").addEventListener("click", () => {
	if (player.isPlaying) {
	    console.log("Paused");
	    player.requestPause();
	} else {
	    console.log("Played");
	    player.requestPlay();
	}
    });
}

function on_video_ready(video) {
    return;
}

function on_time_update(t) {
    return;
}

function on_app_parameter_update(k, v) {
    return;
}
