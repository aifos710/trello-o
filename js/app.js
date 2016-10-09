;(function(){
    
    window.addEventListener("load", cargarPagina);
    
    var section = document.getElementById("section"); 
    var contenedor = document.getElementById("contenedor"); 
    var span = document.getElementById("span"); 
    var formulario = document.getElementById("formulario"); 
    var input = document.getElementById("input"); 
    var botonGuardar = document.getElementById("boton"); 
    var contador = 1;
    
    function cargarPagina(){
        span.addEventListener("click", apareceFormulario);
    };
    
    function apareceFormulario(){
        this.classList.add("none" ); // span
        this.nextElementSibling.classList.remove("none"); // formulario
        this.parentElement.classList.add("bgContenedor"); // contenedor
        input.focus();
        
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
        
       // padreContenedor.addEventListener("dragenter", dragEnter); 
        padreContenedor.addEventListener("drop", dropping);
        padreContenedor.addEventListener("dragover", draggingOver);
    
    };
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
    
        tarjeta.setAttribute("draggable", "true");
    
        tarjeta.addEventListener("dragstart", dragStart);
        //tarjeta.addEventListener("dragleave", dragLeave);
        tarjeta.addEventListener("dragend", dragEnd); 
    };
    
    function agregarNuevaLista(){                                                           
        
        var nuevaLista = document.createElement("div");//creando nuevo span que va al lado
        section.appendChild(nuevaLista);
        span.classList.remove("none");
        nuevaLista.style.display = "inline-block";
        nuevaLista.appendChild(span);
        nuevaLista.appendChild(formulario);
    };
    
    function dropping(e){
        var idArrastrado = e.dataTransfer.getData("text");//obteniedo info del elemento que arrastrare
        this.insertBefore(document.getElementById(idArrastrado), this.lastElementChild);
    };
    
    function draggingOver(e){
        e.preventDefault();
    };
    
    function dragStart(e){
        e.dataTransfer.setData("text", this.id);
        this.classList.add("tarjetaArrastrada");
    };
    
    function dragEnd(e){
        this.classList.remove("tarjetaArrastrada");
    };
    
   
})();