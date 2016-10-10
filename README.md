# Trello

## VERSIÓN 0.0.1
+ Un elemento en el HTML con el mensaje "Añadir una lista", que al dar click muestre un input y un botón (formulario) 
para que el usuario ingrese el nombre de la lista.

1. Creando HTML ( el cual sera usado en todas las versiones)

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

2. JavaScript

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
![uno](http://i67.tinypic.com/27y5y0w.png)

![uno.1](http://i64.tinypic.com/2ro417r.png)

## VERSIÓN 0.0.2
+ Mostrar en el HTML, el texto ingresado al dar click en el botón de "Guardar" del formulario (como si fuera título de la lista).

1. Agregamos los eventos a nuestro boton de "GUARDAR" en la funcion de apareceFormulario
````javascript
this.nextElementSibling.lastElementChild.addEventListener("click", agregarTituloLista); //btn guardar
this.nextElementSibling.lastElementChild.addEventListener("click", agregarNuevaLista); // btn guardar
````
```javascript
function apareceFormulario(){
		this.classList.add("none" ); // span
		this.nextElementSibling.classList.remove("none"); // formulario
		this.parentElement.classList.add("bgContenedor"); // contenedor

		this.nextElementSibling.lastElementChild.addEventListener("click", agregarTituloLista); //btn guardar
		this.nextElementSibling.lastElementChild.addEventListener("click", agregarNuevaLista); // btn guardar
	};	
```
- Agregamos los eventos a nuestro boton de "GUARDAR" en la funcion de apareceFormulario.

+ Debajo del título, mostrar el mensaje clickeable de "Añadir una tarjea".

2. Llamamos a la funcion "agregarTituloLlista
```javascript
function agregarTituloLista(e){
		e.preventDefault();
		formulario.classList.add("none");

		var padreContenedor = this.parentElement.parentElement; //boton,form,contenedor

		var tituloLista = document.createElement("div");
		tituloLista.textContent= input.value; //titulo de tarjeta nueva
		padreContenedor.appendChild(tituloLista).classList.add("tituloLista");
		input.value = "";

		var cajaAnadir = document.createElement("div");
		cajaAnadir.textContent = "Añadir una tarjeta..."
		padreContenedor.appendChild(cajaAnadir).classList.add("cajaAnadir");

		cajaAnadir.addEventListener("click", agregarTarjeta);
	};	
```
![dos](http://i66.tinypic.com/2dayv6g.png)

![dos.1](http://i68.tinypic.com/32zmbrn.png)

## VERSIÓN 0.0.3
+ Una vez agregada la lista, mostrar el mensaje clickeable de "Añadir una lista" al lado de la lista agregada.

1. Llamamos a la funcion "agregarNuevaLista"
```javascript
function agregarNuevaLista(){                                                          	
		
		var nuevaLista = document.createElement("div");//creando nuevo span que va al lado
		section.appendChild(nuevaLista);
		span.classList.remove("none");
		nuevaLista.style.display = "inline-block";
		nuevaLista.appendChild(span);
		nuevaLista.appendChild(formulario);
	};
```

![tres](http://i63.tinypic.com/j64v8o.png)
## VERSIÓN 0.0.4

+ Al dar click en "Añadir una lista", asegurarse que el input del formulario tenga el focus
para poder escribir directamente el nombre de la lista.

```javascript
input.focus();
```
+ Dar click al mensaje "Añadir una tarjeta" y mostrar e formulario para agregar la tarjeta 
(Nota: El ingreso de texto es mediante un textarea).


```javascript
cajaAnadir.addEventListener("click", agregarTarjeta);
```

```javascript
function agregarTarjeta(){
        this.classList.add("none");
        var contTextarea = document.createElement("div");
        this.parentElement.appendChild(contTextarea).classList.add("contTextarea");
        
        var textArea = document.createElement("textarea");
        contTextarea.appendChild(textArea).classList.add("form-control", "textArea");
        var botonAnadir = document.createElement("button");
        botonAnadir.textContent = "Añadir";
        contTextarea.appendChild(botonAnadir).classList.add("btn-success", "btn-block", "btn", "btn-sm", "pull-left", "botonAnadir");
        botonAnadir.addEventListener("click", anadirTarjetaTitulo);
    };
```

![cuatro](http://i63.tinypic.com/35nau6f.png )
## VERSIÓN 0.0.5
+ Al dar click en el botón de guardar al momento de añadir tarjeta, 
mostrar el mensaje de "Añadir tarjeta" debajo de la tarjeta añadida.

```javascript
function anadirTarjetaTitulo(){
        
        this.parentElement.classList.add("none");
        
        var tarjeta = document.createElement("div");
        tarjeta.textContent = this.previousElementSibling.value;
        this.parentElement.parentElement.appendChild(tarjeta).classList.add("claseTarjeta");
        this.parentElement.parentElement.lastElementChild.classList.add("tarjeta2");
        
        var anadirTarjeta = this.parentElement.previousElementSibling;
        anadirTarjeta.parentElement.appendChild(anadirTarjeta);
        anadirTarjeta.classList.remove("none");
        tarjeta.id = "tarjeta" + contador;
        contador++;
        
    };
```
![cinco.1](http://i66.tinypic.com/1gmzhl.png)

![cinco.2](http://i66.tinypic.com/1445y61.png)

![cinco.3](http://i64.tinypic.com/32zv0uh.png)
## VERSIÓN 0.0.6
+ Asegurar la funcionalidad de poder agregar múltiples listas y tarjetas.
![seis](http://i65.tinypic.com/255l1cx.png)

# TRELLO V2

## VERSIÓN 0.1.0
+ Implementar el evento Drag & Drop de las tarjetas para que pueda ser movida entre las listas creadas.

1. Agregamos a la funcion "agregarTarjetaTitulo"

```javascript
tarjeta.id = "tarjeta" + contador
contador++;

tarjeta.setAttribute("draggable", "true");
tarjeta.addEventListener("dragstart", dragStart);  
```
2. funcion agregarTituloLista

```javascript
padreContenedor.addEventListener("drop", dropping);
padreContenedor.addEventListener("dragover", draggingOver);
```
3. llamamos a las funciones:

```javascript
 function dropping(e){
        var idArrastrado = e.dataTransfer.getData("text");//obteniedo info del elemento que arrastrare
        this.insertBefore(document.getElementById(idArrastrado), this.lastElementChild);
    };
     function dragStart(e){
        e.dataTransfer.setData("text", this.id);
        this.classList.add("tarjetaArrastrada");
    };
    function draggingOver(e){
        e.preventDefault();
    };
 ```
 
![uno.cero](http://i67.tinypic.com/fz43d1.png)

## VERSIÓN 0.1.1
+ Agregar un estilo personalizado a la tarjeta cuando esté siendo arrastrada por el usuario.

1. Agregamos a la funcion dragStart:

```javascript
this.classList.add("tarjetaArrastrada");
```

1.1. CSS

```css
.tarjetaArrastrada{
	background-color: #fff;
	border:  double #6e2f1a;
}
```

2. Llamamos a la funcion "dragEnd" declarada en la funcion "anadirTarjeta"

```javascript
function dragEnd(e){
    this.classList.remove("tarjetaArrastrada");
 };
```
![uno.1](http://i67.tinypic.com/ih16kk.jpg)

## VERSIÓN 0.1.2
+ Agregar un estilo a la lista cuando la tarjeta esté pasando por encima (dragover).

```javascript
function dragEnter(e){
        this.classList.add("dndClaseLista");
    };
function dragLeave(e){
        this.classList.remove("dndClaseLista");
    };
```
```javascript
var removeClass = document.getElementsByClassName("dndClaseLista");
for (var i = 0, l = removeClass.length; i < l; i++) {
    removeClass[i].classList.remove("dndClaseLista")
}
```
. CSS

```css
.dndClaseLista{
	box-shadow: 10px 10px 5px gray;
}
```

![](http://i68.tinypic.com/vrdpgx.png)

## VERSIÓN 0.1.3
+ Agregar una transición css cuando la tarjeta y/o lista haya sido colocada en una nueva lista.

1. Agregamos al html la etiqueta link, la cual nos llevara a lo descargado de la pagina "animate css"

```html
<link rel="stylesheet" type="text/css" href="css/animate.css">
```
2. Agregamos la clase en la funcion "dropping" (drop)

```javascript
this.classList.add("animated", "zoomIn");
```
3. Para removerla : declaramos una variable y usamos un for

```javascript
var removeClass = document.getElementsByClassName("animated");
        for (var i = 0, l = removeClass.length; i < l; i++) {
            removeClass[i].classList.remove("animated", "zoomIn");
        }
```
![](http://i65.tinypic.com/2zr0upz.png)

## RELEASE: TRELLO VERSIÓN 1.0.0
