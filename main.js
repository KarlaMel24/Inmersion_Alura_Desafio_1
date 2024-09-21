let cantidadCaracteres = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar() {
    let numeroDigitado = parseInt(cantidadCaracteres.value);
    
    if (numeroDigitado < 8){
        alert(`La cantidad de caracteres tiene que ser mayor que 7`);
        return;
    }
    
    let password = '';
    for (let i=0; i < numeroDigitado; i++){
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
        }
    contrasena.value = password;
    validar(password);
}

function limpiar(){
    cantidadCaracteres.value = '';
    contrasena.value = '';
}

function validar(clave) {
    const tieneMayuscula = /[A-Z]/.test(clave);
    const tieneMinuscula = /[a-z]/.test(clave);
    const tieneDigito = /\d/.test(clave);
    const tieneEspecial = /[!@#$%^&*()]/.test(clave);

    if (tieneMayuscula && tieneMinuscula && tieneDigito && tieneEspecial) {
        document.getElementById("verificacion").value = "La contraseña es fuerte"
    } else {
        document.getElementById("verificacion").value = "La contraseña es débil"
    }
    document.getElementById("verificacion").style.display = "inline";
}


// Compartirlo en github
// Decir si la contraseña es fuerte o débil (mayúscula, minúscula, letra, caractér especial)