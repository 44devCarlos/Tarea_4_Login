function showHidePassword() {
	let ojo = document.getElementById("ojo");
	let contraseña = document.getElementById("contraseña");
	if (!ojo.checked) {
		contraseña.type = "text";
	} else {
		contraseña.type = "password";
	}
}
function validacion() {
	let usuario = /Estudiante@123/;
	let contraseña = /Estudiante@123/;
	let validar = true;
	let inputUsuario = document.getElementById("texto");
	let inputContraseña = document.getElementById("contraseña");
	let mensaje = document.getElementById("mensajeError");

	if (!usuario.test(inputUsuario.value)) {
		validar = false;
	}
	if (!contraseña.test(inputContraseña.value)) {
		validar = false;
	}
	return validar;
}
function validarMalo() {
	let inputUsuario = document.getElementById("texto");
	let inputContraseña = document.getElementById("contraseña");
	let message1 = document.querySelector(".message-user");
	let message2 = document.querySelector(".message-password");

	inputUsuario.style.border = "2px solid red";
	message1.style.display = "flex";
	inputContraseña.style.border = "2px solid red";
	message2.style.display = "flex";
}
function validarBueno() {
	let inputUsuario = document.getElementById("texto");
	let inputContraseña = document.getElementById("contraseña");
	let message1 = document.querySelector(".message-user");
	let message2 = document.querySelector(".message-password");

	inputUsuario.style.border = "2px solid white";
	message1.style.display = "none";
	inputContraseña.style.border = "2px solid white";
	message2.style.display = "none";
}

function loguear() {
	let loader = document.querySelector(".loader");
	let boximage = document.querySelector(".boximage");
	let box = document.querySelector(".box");
	let audio = document.getElementById("loginAudio");
	let audio2 = document.getElementById("loginAudio2");
	let buttonAudio = document.getElementById("buttonAudio");
	let opaco2 = document.querySelector(".opaco");
	let bienvenida = document.querySelector(".mensajeBienvenida");
	let satoru = document.querySelector(".satoru");
	let megumi = document.querySelector(".megumi");
	let itadori = document.querySelector(".itadori");

	validarBueno();
	loader.style.display = "block";
	buttonAudio.play();
	if (validacion() == true) {
		setTimeout(() => {
			audio.play();
			loader.style.display = "none";
			boximage.style.display = "none";
			box.style.display = "none";
			opaco2.classList.remove("opaco");
			opaco2.classList.add("opaco2");
			bienvenida.style.display = "flex";
			bienvenida.classList.add("mostrar");
			satoru.style.display = "flex";
			megumi.style.display = "flex";
			itadori.style.display = "flex";
			document.body.style.backgroundImage = `url("img/fondo3.jpg")`;
		}, 5000);
	} else {
		setTimeout(() => {
			loader.style.display = "none";
			validarMalo();
			audio2.play();
		}, 5000);
	}
}
