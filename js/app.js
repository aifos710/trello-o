;(function(){

	window.addEventListener("load", cargarPagina);

	var section = document.getElementById("section"); 
	var contenedor = document.getElementById("contenedor"); 
	var span = document.getElementById("span"); 
	var formulario = document.getElementById("formulario"); 
	var input = document.getElementById("input"); 
	var botonGuardar = document.getElementById("boton"); 

	function cargarPagina(){
		span.addEventListener("click", apareceFormulario);
	};

	function apareceFormulario(){
		this.classList.add("none" ); // span
		this.nextElementSibling.classList.remove("none"); // formulario
		this.parentElement.classList.add("bgContenedor"); // contenedor

		this.nextElementSibling.lastElementChild.addEventListener("click", agregarTituloLista); //btn guardar
		this.nextElementSibling.lastElementChild.addEventListener("click", agregarNuevaLista); // btn guardar
	};	

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

})();