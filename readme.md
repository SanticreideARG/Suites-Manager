# Suites Manager - 

## A JS Project


Para entrar se debe ingresar los siguientes campos

>Usuario:    coder
>Contraseña: coder

----------------------------------------------------------------------------------------------


Este proyecto fue desarrollado como parte de una practica para mi cursada de Javascript en la carrera de Desarrollo
web de CODERHOUSE.
Suites Manager es un gestor simple de Alojamientos, esta configurado para 15 habitaciones que comienzan en el 201 hasta el 215. Cada una de ellas admite un Check In de una persona, quien sera el titular de la habitacion. Se almacenaran datos referentes a este:
Nombre/s
Apellido/s
Numero de ID de la operacion
Nacionalidad
Dia de Ingreso (dia actual).
Duracion de la Estadia


>La version final debera incorporar numero de id, al igual que la cantidad de acompañantes que registra el cliente, y la calificacion otorgada.


Al eliminarse el Checkin, este se envia a un historial, el cual tambien almacenara el historial de las tareas del Dashboard.

El proyecto utiliza unicamente Toastify JS como librerias. La logica para manejarse entre ventanas se hizo con un componente de bootstrap en principio, pero posteriormente decidi desarrollarla por mi cuenta con javascript, y el resultado me parecio bastante bueno, pese a que quiza exista una solucion mas sencilla para realizar dicha funcion.

>Los estilos fueron preprocesados con sass para mayor comodidad en la tarea de diseño.

La logica de project Manager se divide en 3 archivos principales:

### app.js

Este modulo es el encargado del Login y de la gestion de ventanas.
el Login utiliza session storage para conservar su estado de logeado durante la duracion del ingreso.
El gestor de ventanas utiliza el navegador de la izquierda para desplazarse por las distintas partes de la aplicacion mediante clases de css.

### checkin.js

Este modulo maneja el sistema de Check Ins y Check Outs de las habitaciones, asi como el historial correspondiente a estos.
Primero ingresa tres entradas a modo de ejemplo.
Luego utiliza un event listener para validar los formularios hacia un array, donde se almacenan los huespedes.
Cada habitacion puede recibir un solo huesped, lo que evita que se superpongan.
La informacion se graba visualmente en la interfaz, y en el localStorage.

La seccion superior del Dashboard tambien se maneja desde aqui, donde se muestra el total de habitaciones, cuantas de ellas estan ocupadas, y cuantas libres.

### dashboard.js

El dashboard consiste en una pantalla principal donde se muestran la cantidad de habitaciones disponibles y ocupadas, informacion sobre condiciones climaticas de lugares de interes y el taskmanager, un modulo de gestion y archivado de tareas.
Las otras dos secciones se manejaran desde este archivo.
La primera es un conjunto de tarjetas con informacion del clima (la cual se ubica en la parte inferior del Dashboard), que hace uso del api del Servicio Meteorologico Nacional Argentino para brindar informacion util como la descripcion del estado climatico actual (la cual determinara el fondo de la tarjeta, ya sea soleado, lluvioso, nublado, ventoso, nieve o tormentas electricas), la velocidad del viento (Kmph), la Temperatura(C) y la Humedad (%).
En la parte central del Dashboard esta el Task Manager, cuya funcion es la de servir de sencillo anotador de tareas pendientes, a la vez que les brinda un registro efectivo mediante localStorage.