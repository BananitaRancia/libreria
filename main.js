const electrodomesticos = [{
        id: 1,
        nombre: "Aire acondicionado Hitachi",
        img: './img/airehitachi.jpg',
        precio: 120000,
    },
    {
        id: 2,
        nombre: "TV 4K UHD Samsung 65 ",
        img: './img/tv65.jpg',
        precio: 228000

    },
    {
        id: 3,
        nombre: "Lavarropas Drean",
        img: './img/lavarropa6kg.jpg',
        precio: 80000
    },
    {
        id: 4,
        nombre: "Motorola Moto G22",
        img: './img/motog22.jpg',
        precio: 30000
    },
    {
        id: 5,
        nombre: "Notebook Lenovo",
        img: './img/notelenovo.jpg',
        precio: 120000
    },
    {
        id: 6,
        nombre: "Cocina Whirlpool",
        img: './img/cocinawhilpoll.png',
        precio: 90000
    },
]


const contenedorOfertas = document.querySelector("#contenedor-ofertas");
const contenedorCarrito = document.querySelector(".contenedor-carrito");
const carritoCompra = JSON.parse(localStorage.getItem("carritoCompra")) || [];


//evento
document.addEventListener("DOMContentLoaded", function () {
    

    //electrodomesticos
    mostrarelectrodomesticos()

    mostrarelectrodomesticosEncontrado(carritoCompra);

})

function mostrarelectrodomesticos() {

    electrodomesticos.forEach(function (electrodomestico) {
        const divElectro = document.createElement("div");
        divElectro.classList.add("card");

        const imagenElectro = document.createElement("img");
        imagenElectro.src = electrodomestico.img;
        imagenElectro.className = "imagen-electro";


        const tituloElectro = document.createElement("h3");
        tituloElectro.textContent = electrodomestico.nombre;
        tituloElectro.classList.add = ("titulo-electro");

        const btnFavorito = document.createElement("button");
        btnFavorito.textContent = "Agregar a favorito";
        btnFavorito.classList.add("btn-favorito");

        //Evento boton para agregar
        btnFavorito.onclick = function () {
            agregarCarrito(electrodomestico.id);
        
        //Libreria
                  
        Toastify({

        text: "Agregado al Carrito",
        duration: 3000,
        gravity: `bottom`,
        style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    
        }).showToast();
    
            
        }

        //se agregan elementos
        divElectro.appendChild(imagenElectro);
        divElectro.appendChild(tituloElectro);
        divElectro.appendChild(btnFavorito);

        //va al dom
        contenedorOfertas.appendChild(divElectro);

    })
}

function agregarCarrito(id) {
    const electrodomesticoEncontrado = electrodomesticos.find(function (electrodomestico) {
        return electrodomestico.id === id

    })
    carritoCompra.push(electrodomesticoEncontrado);
    mostrarelectrodomesticosEncontrado(carritoCompra);

    //local json o INTENTO (no estoy seguro en donde va colocado)
    let arreglo_JSON = JSON.stringify(carritoCompra);
    localStorage.setItem("carritoCompra", arreglo_JSON);

    console.log ( carritoCompra) ;
      
}

function mostrarelectrodomesticosEncontrado(carrito) {
    
    contenedorCarrito.innerHTML = "";
    
    
    carrito.forEach(function (electrodomestico) {
        const divElectro = document.createElement("div");
        divElectro.classList.add("card");

        const imagenElectro = document.createElement("img");
        imagenElectro.src = electrodomestico.img;
        imagenElectro.className = "imagen-electro";


        const tituloElectro = document.createElement("h3");
        tituloElectro.textContent = electrodomestico.nombre;
        tituloElectro.classList.add = ("titulo-electro");

         const btnBorrar = document.createElement("button");
         btnBorrar.textContent = "Quitar del Carrito";
         btnBorrar.classList.remove("borrarElemento");

        //Evento boton para borrar 

        //El boton borra pero despues al agregar otro electrodomestico se vuelve a agregar
        btnBorrar.onclick = function borrarElemento (e) {

            Toastify({

                text: "Se Elimino del Carrito",
                duration: 3000,
                gravity: `bottom`,
                style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
            
                }).showToast();
                        
            let hijo = e.target;
            let padre = hijo.parentNode;
            let abuelo = padre.parentNode;

            console.log(hijo);
            console.log(padre);
            console.log(abuelo);

            padre.remove();

            

            localStorage.clear(carritoCompra);
            

            
            
            
        }
        
           
            

        //se agregan elementos
        divElectro.appendChild(imagenElectro);
        divElectro.appendChild(tituloElectro);
        divElectro.appendChild(btnBorrar);

        //va al dom
        contenedorCarrito.appendChild(divElectro);

    })
    

      
            
}

//Libreria

// Toastify({

//     text: "Testeando Toasti",       
//     duration: 1500,
//     destination:"https://www.google.com/",
//     gravity:"bottom",
//     position:"left",
//     style:{
//         fontSize:"30px",
//         fontFamily:"Verdana",
//         color:"silver",
//         background:"linear-gradient( #e38894, #548eeb)"
//     }
    
// }).showToast();

