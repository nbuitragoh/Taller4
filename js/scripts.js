let mensajenombre = document.getElementById('mensajealertanombre')
let mensajeapellido = document.getElementById('mensajealertaapellido')
let mensajecorreo = document.getElementById('mensajealertacorreo')
let mensajecontraseña = document.getElementById('mensajealertacontraseña')
let mensajeedad = document.getElementById('mensajealertaedad') 
let mensajeTyC = document.getElementById('mensajealertaTyC') 


function validarformulario(e){
  e.preventDefault()
  let inputname=document.getElementById('name')
  let inputapellido=document.getElementById('apellido')
  let inputcorreo=document.getElementById('correo')
  let inputcontra=document.getElementById('contraseña')
  let inputedad=document.getElementById('edad')
  let inputTC = document.getElementById('inputTyC')
  if(inputname.value == ''){
    mensajenombre.innerText = "por favor llena el campo nombre"
    inputname.classList.add('bgcAlert')
    swal("Error!", "LLena el campo Nombre", "error");
  } else if(inputapellido.value == ''){
    mensajeapellido.innerText = "por favor llena el campo apellido"
    inputapellido.classList.add('bgcAlert')
    swal("Error!", "LLena el campo Apellido", "error");
  }else if(inputcorreo.value == ''){
    mensajecorreo.innerText = "por favor llena el campo correo"
    inputcorreo.classList.add('bgcAlert')
    swal("Error!", "LLena el campo Correo", "error");
  }else if(inputcontra.value == ''){
    mensajecontraseña.innerText = "por favor llena el campo contraseña"
    inputcontra.classList.add('bgcAlert')
    swal("Error!", "LLena el campo Contraseña", "error");
  }else if(inputedad.value == ''){
    mensajeedad.innerText = "por favor llena el campo edad"
    inputedad.classList.add('bgcAlert')
    swal("Error!", "LLena el campo Edad", "error");
  }else if (inputTC.checked == false ){
    mensajeTyC.innerText = "Acepta terminos y condiciones"
    swal("Error!", "Acepta los terminos y condiciones", "error");
  }else{
    swal("Bienvenido", "Te has registrado con exito", "success");
    setTimeout(()=>{
      window.location = './Taller3/index.html'
    }, 3000)
    
  }

}