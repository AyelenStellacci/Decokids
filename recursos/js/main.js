importarProductos()
function importarProductos() {
  fetch("productos/productos.json")
    .then((response) => response.json())
    .then((json) => mostrarProductos(json))
    .then();
}

function mostrarProductos(productos) {
  let arrayProductos = productos
  buscarProducto(arrayProductos)
  productos.forEach((producto) => {
    mostrarProducto(producto);
    mostrarDetalles()
  });
}
function mostrarProducto(producto) {
  const productosImpresos = document.getElementById("productosImpresos");
  const tarjetaProducto = document.createElement("div");
  tarjetaProducto.className += "tarjetaProducto";
  tarjetaProducto.innerHTML = `<article class="imgProducto"><img class="imagenProducto" src="./recursos/productos/${producto.age}/${producto.href}.jpg" alt="${producto.nombre}"></article>
                              <h1 class="nombreProducto">${producto.nombre}</h1>
                              <a href="productos/${producto.href}.html"><button class="addCartBTN">Ver producto</button></a>`;
  productosImpresos.appendChild(tarjetaProducto);
}
function mostrarDetalles(){
  const mostrarDetallesButtons = document.querySelectorAll(".imagenProducto")
  mostrarDetallesButtons.forEach((mostrarDetallesBTN)=>{mostrarDetallesClick(mostrarDetallesBTN)})
}
function mostrarDetallesClick(mostrarDetallesBTN){
  mostrarDetallesBTN.addEventListener("click", mostrarDetallesClicked)
}
function mostrarDetallesClicked (event){
  let mostrarDetalles = event.target
  let itemADetallar = mostrarDetalles.closest(".tarjetaProducto")
  let itemADetallarImagen = itemADetallar.querySelector(".imagenProducto").src
  Swal.fire({
    imageUrl: itemADetallarImagen,
    imageWidth: 300,
    imageHeight: 300,
  })
}

function buscarProducto(arrayProductos){
  let inputBusqueda = document.getElementById("searchProductInput")
  let cat1 = document.getElementById('0a1')
  let cat2 = document.getElementById('1a2')
  let cat3 = document.getElementById('2a3')
  let all = document.getElementById('all')
  let arrayBusqueda = []
  cat1.addEventListener("click",(event)=>{
    cat1.classList.add("catdestacado")
    cat2.classList.remove("catdestacado")
    cat3.classList.remove("catdestacado")
    arrayBusqueda = []
    arrayProductos.forEach((productoExistente)=>{
      if (productoExistente.age.includes("0-1")){
        arrayBusqueda.push(productoExistente)
        productosImpresos.innerHTML=''
        arrayBusqueda.forEach((productoBuscado)=>
        mostrarProducto(productoBuscado))
      }
      else{
        productosImpresos.innerHTML=''
        arrayBusqueda.forEach((productoBuscado)=>
        mostrarProducto(productoBuscado))
      }
    })})

    cat2.addEventListener("click",(event)=>{
      cat2.classList.add("catdestacado")
      cat1.classList.remove("catdestacado")
      cat3.classList.remove("catdestacado")
      arrayBusqueda = []
      arrayProductos.forEach((productoExistente)=>{
        if (productoExistente.age.includes("1-2")){
          arrayBusqueda.push(productoExistente)
          productosImpresos.innerHTML=''
          arrayBusqueda.forEach((productoBuscado)=>
          mostrarProducto(productoBuscado))
        }
        else{
          productosImpresos.innerHTML=''
          arrayBusqueda.forEach((productoBuscado)=>
          mostrarProducto(productoBuscado))
        }
      })
  })

  cat3.addEventListener("click",(event)=>{
    cat3.classList.add("catdestacado")
    cat2.classList.remove("catdestacado")
    cat1.classList.remove("catdestacado")
    arrayBusqueda = []
    arrayProductos.forEach((productoExistente)=>{
      if (productoExistente.age.includes("2-3")){
        arrayBusqueda.push(productoExistente)
        productosImpresos.innerHTML=''
        arrayBusqueda.forEach((productoBuscado)=>
        mostrarProducto(productoBuscado))
      }
      else{
        productosImpresos.innerHTML=''
        arrayBusqueda.forEach((productoBuscado)=>
        mostrarProducto(productoBuscado))
      }
    })
})

all.addEventListener("click",(event)=>{
  cat1.classList.remove("catdestacado")
  cat2.classList.remove("catdestacado")
  cat3.classList.remove("catdestacado")
  arrayBusqueda = []
  arrayProductos.forEach((productoExistente)=>{
      if (productoExistente.age.includes("")){
        arrayBusqueda.push(productoExistente)
        productosImpresos.innerHTML=''
        arrayBusqueda.forEach((productoBuscado)=>
        mostrarProducto(productoBuscado))
      }
      else{
        productosImpresos.innerHTML=''
        arrayBusqueda.forEach((productoBuscado)=>
        mostrarProducto(productoBuscado))
      }
    })
})

inputBusqueda.addEventListener("keyup",(event)=>{
  cat1.classList.remove("catdestacado")
  cat2.classList.remove("catdestacado")
  cat3.classList.remove("catdestacado")
  arrayBusqueda = []
  let busqueda = inputBusqueda.value.toLowerCase()
  arrayProductos.forEach((productoExistente)=>{
    if (productoExistente.nombre.toLowerCase().includes(busqueda)){
      arrayBusqueda.push(productoExistente)
      productosImpresos.innerHTML=''
      arrayBusqueda.forEach((productoBuscado)=>
      mostrarProducto(productoBuscado))
    }
    else{
      productosImpresos.innerHTML=''
      arrayBusqueda.forEach((productoBuscado)=>
      mostrarProducto(productoBuscado))
    }
  })
})}