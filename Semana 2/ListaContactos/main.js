//IIFE Función inmediatamente invocada sorre el javasript sólo cuando abre la página

(function() {
  'use strict';


  //Verificamos la conexión entre nuestro htnl y nuestro js
  console.log("hola, si ves esto tu js sirve")

  //creamos una función que se llame saludo cuyo único argumento sea un texto que se muestre en consola
  function saludo(texto) {
    console.log(texto);
  }
  //Hacemos una prueba de la función saludo

  saludo("Hola desde la función saludo!");

  //Localizamos el botón guardar en nuestro html

  var boton = document.getElementById("guardar");

  console.log(boton);

  boton.addEventListener("click", function() {
    saludo("Hola desde el botón!")

    crearFila();


  })


  function crearFila() {

    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var correo = document.getElementById("correo");
    var telefono = document.getElementById("telefono");


    //mostramos en consola las variables capturadas

    console.log(nombre, apellidos, correo, telefono)


    var tabla = document.querySelector(".list table");
    console.log(tabla);

    var nuevaFila = '<tr>' +

      '<td>'+nombre.value+'</td>' +
      '<td>'+apellidos.value+'</td>' +
      '<td>'+correo.value+'</td>' +
      '<td>'+telefono.value+'</td>' +
      '<tr>';

    console.log(nuevaFila);

    tabla.insertRow(-1).innerHTML = nuevaFila;


    nombre.value = "";
    apellidos.value = "";
    correo.value = "";
    telefono.value = "";



//Cómo Validar casillas







  }


}());
