class Producto {
    constructor(id, nombre, precio, desarrollador = "Producto Disponible", img = "") {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.desarrollador = desarrollador
        this.img = img
    }
}

let baseDatos = []
baseDatos.push(new Producto(0,"Among Us",67.99,"Innersloth",))
baseDatos.push(new Producto(1,"PAYDAY 2",149.99,"OVERKILL-a Starbreeze Studio"))
baseDatos.push(new Producto(2,"Fallout 4",799.00, "Bethesda Game Studios"))
baseDatos.push(new Producto(3,"Mafia: Edición Definitiva",2559.00, "Hangar 13"))
baseDatos.push(new Producto(4,"Grand Theft Auto V",314.00,"Rockstar North"))
baseDatos.push(new Producto(5,"Dead by Daylight",999.00,"Behaviour Interactive Inc."))



let section = document.getElementById("seccion-productos")
let temp = document.querySelector("template")
let card = temp.content.querySelector("div")


    baseDatos.forEach((producto)=> {
        let cardClonada = card.cloneNode(true)
        section.appendChild(cardClonada)


        cardClonada.children[0].innerText = producto.nombre


        cardClonada.children[1].innerText = producto.precio


        cardClonada.children[2].innerText = producto.desarrollador


        if (producto.nombre == "Mafia: Edición Definitiva") {
            cardClonada.child= "true"
        }
    })

const parrafo = document.querySelector(".cantidad");


const botonsumar = document.getElementById("mas");

let contador = 0;

botonsumar.addEventListener("click", () => {
    console.log("click");
    contador++;
    parrafo.textContent = contador;
});

const botonrestar = document.getElementById("menos")

botonrestar.addEventListener("click", () => {
    console.log("click");
    contador--;
    parrafo.textContent = contador;
});


const bloque = document.querySelector(".product-card")

bloque.addEventListener("mouseenter", () => {
    bloque.style.backgroundColor = "red";
})

bloque.addEventListener("mouseleave", () => {
    bloque.style.backgroundColor = "rgb(151, 16, 16)";
})

const baseDatosEnvio = JSON.stringify(baseDatos)

localStorage.setItem("Juegos", baseDatosEnvio)

const baseDatosRecibo = localStorage.getItem("Juegos")

const juegosArray = JSON.parse(localStorage.getItem("Juegos"))
console.log(juegosArray)
