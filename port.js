// selección de elementos

const botonesAgregar= document.querySelectorAll(".btn_agregar")

const listaEstanteria= document.getElementById("lista-estanteria")

const totalSpan= document.getElementById("total")

let totalLibros= 0

// recorremos los botones con forEach

botonesAgregar.forEach(boton=>{

    boton.addEventListener("click",e=>{

        // accedemos al contenedor del libro
        
        const libro= e.target.parentElement

        const titulo= libro.querySelector("h3").textContent
        
        // creamos un li con el titulo del libro
        
        const li= document.createElement("li")

        li.textContent= titulo

        listaEstanteria.appendChild(li)

        totalLibros++

        totalSpan.textContent= totalLibros

    })
})