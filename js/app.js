function valida_envia(){

  var email = document.fvalida.email.value;
   	//valido el nombre
   	if (document.fvalida.name.value.length==0){
      	alert("Tiene que escribir sus nombres")
      	document.fvalida.name.focus()
      	return 0;
   	}
    //valido el apellido

    if (document.fvalida.lastName.value.length==0){
        alert("Tiene que escribir sus Apellidos")
        document.fvalida.lastName.focus()
        return 0;
    }

    //valido el celular

    if (document.fvalida.phone.value.length == ""){
        alert("Tiene que escribir su número de Celular")
        document.fvalida.phone.focus()
        return 0;
    }

    if (document.fvalida.email.value.length==/\S+@\S+/){
      	alert("Tiene que escribir su correo")
      	document.fvalida.email.focus()
      	return 0;
   	}

    if (email.indexOf('@') <= 0) {
        alert("Escriba su correo")
      return false;
    }

  alert("Muchas gracias por enviar el formulario");
  	document.fvalida.submit();


}
