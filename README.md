# Trello

## VERSIÓN 0.0.1
Un elemento en el HTML con el mensaje "Añadir una lista", que al dar click muestre un input y un botón (formulario) 
para que el usuario ingrese el nombre de la lista.

+ Creando HTML ( el cual sera usado en todas las versiones)

```html
<!DOCTYPE html>
<html lang="es">
	<head>
		<title>Trello</title>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
		<link rel="stylesheet" type="text/css" href="css/main.css">
	</head>
	<body>
		<div id="section">
		    <div id="contenedor">
		        <span id="span">Añadir una lista...</span>
		        <form id="formulario" class="none"> 
		            <input type="text" id="input" class="form-control" placeholder="Añadir una lista..."><br>
		            <button type="submit" id="boton" class="btn-success btn-block btn btn-sm pull-left">Guardar</button>
		        </form>
		    </div>
		</div>
		<script  type="text/javascript" src="js/app.js"></script>
        <script type="text/javascript" src="js/jquery.min.js"></script>
		<script type="text/javascript" src="js/bootstrap.js"></script>
	</body>
</html>
```

+ JavaScript

```javascript
//Iniciamos con un "punto y coma" para que cualquier codigo escrito antes no perjudique a este
;(function(){
	window.addEventListener("load", cargarPagina);

//declaramos a las variables GLOBALES unicamente a aquellas creadas en el HTML
	var section = document.getElementById("section"); 
	var contenedor = document.getElementById("contenedor"); 
	var span = document.getElementById("span"); 
	var formulario = document.getElementById("formulario"); 
	var input = document.getElementById("input"); 
	var botonGuardar = document.getElementById("boton"); 
  
//span = Añadir una lista 
	function cargarPagina(){
		span.addEventListener("click", apareceFormulario);
	};

//funcion que hara que el formulario aparezca
	function apareceFormulario(){
		this.classList.add("none" ); // hace referencia al span
		this.nextElementSibling.classList.remove("none"); // hace referencia al formulario
		this.parentElement.classList.add("bgContenedor"); //hace referencia al contenedor
	};	

})();
```
## VERSIÓN 0.0.2
Mostrar en el HTML, el texto ingresado al dar click en el botón de "Guardar" del formulario (como si fuera título de la lista).
Debajo del título, mostrar el mensaje clickeable de "Añadir una tarjea".
## VERSIÓN 0.0.3
Una vez agregada la lista, mostrar el mensaje clickeable de "Añadir una lista" al lado de la lista agregada.
## VERSIÓN 0.0.4
Al dar click en "Añadir una lista", asegurarse que el input del formulario tenga el focus
para poder escribir directamente el nombre de la lista.
Dar click al mensaje "Añadir una tarjeta" y mostrar e formulario para agregar la tarjeta 
(Nota: El ingreso de texto es mediante un textarea).
## VERSIÓN 0.0.5
Al dar click en el botón de guardar al momento de añadir tarjeta, 
mostrar el mensaje de "Añadir tarjeta" debajo de la tarjeta añadida.
## VERSIÓN 0.0.6
Asegurar la funcionalidad de poder agregar múltiples listas y tarjetas.
