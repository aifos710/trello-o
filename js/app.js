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
	};	

})();