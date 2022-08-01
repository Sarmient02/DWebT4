const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{10,20}$/,
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,25}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,25}$/,
	password: /^[a-zA-Z0-9\#\%\/\&]{15,20}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/,
    direccion: /^(cll|cra|av|anv|trans)[\s-]\d{1,3}[\s-]+#\d{1,3}[\s-]\d{1,3}$/
}

const campos = {
	usuario: false,
	nombre: false,
    apellido: false,
	password: false,
	email: false,
	telefono: false,
    direccion:false
}

const validarFormulario = (e) => {
	switch(e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "direccion":
			validarCampo(expresiones.direccion, e.target, 'direccion');
		break;
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
		break;
		case "c_password":
			confirmarPassword();
		break;
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById('label_'+campo).classList.remove('incorrecto');
		document.getElementById('label_'+campo).classList.add('correcto');
		document.getElementById('p_'+campo).classList.remove('form_input_error_activo');
		campos[campo]=true;
	}else{
		document.getElementById('label_'+campo).classList.remove('correcto');
		document.getElementById('label_'+campo).classList.add('incorrecto');
		document.getElementById('p_'+campo).classList.add('form_input_error_activo');
		campos[campo]=false;
	}
}

const confirmarPassword = () => {
	const inputPassword = document.getElementById('password');
	const inputCPassword = document.getElementById('c_password');
	if(inputPassword.value !== inputCPassword.value){
		document.getElementById('label_cpassword').classList.remove('correcto');
		document.getElementById('label_cpassword').classList.add('incorrecto');
		document.getElementById('p_cpassword').classList.add('form_input_error_activo');
		campos[password]=false;
	}else{
		document.getElementById('label_cpassword').classList.remove('incorrecto');
		document.getElementById('label_cpassword').classList.add('correcto');
		document.getElementById('p_cpassword').classList.remove('form_input_error_activo');
		campos[password]=true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	if(campos.usuario && campos.nombre && campos.apellido && campos.password && campos.email && campos.telefono && campos.direccion){
		formulario.reset();

		document.getElementById('form_mensaje').classList.add('form_mensaje_exito_activo');
		setTimeout(() => {
			document.getElementById('form_mensaje').classList.remove('form_mensaje_exito_activo');
		}, 5000)

		document.querySelectorAll('label').forEach((icono) => {
			icono.classList.remove(".correcto");
		});
	}else{
		document.getElementById('form_mensaje_inc').classList.add('form_mensaje_inc_activo');
		setTimeout(() => {
			document.getElementById('form_mensaje_inc').classList.remove('form_mensaje_inc_activo');
		}, 5000)
	}
});

function mostrar(){
	var y = document.getElementById("gustos");
	y.style = "display:block";
}