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
