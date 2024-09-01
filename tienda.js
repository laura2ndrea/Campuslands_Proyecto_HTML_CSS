document.addEventListener("DOMContentLoaded", () => {
    cargarProductos();
    configurarBusqueda();
    configurarCarrito();
});

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function cargarProductos() {
    fetch("productos.json")
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("productos", JSON.stringify(data)); // Guardar productos en localStorage
            mostrarProductos(data);
        })
        .catch(error => console.error("Error al cargar los productos:", error));
}

function mostrarProductos(productos) {
    const productoLista = document.getElementById("producto-lista");
    productoLista.innerHTML = ""; 
    productos.forEach(producto => {
        const productoTarjeta = document.createElement("div");
        productoTarjeta.className = "producto-tarjeta";
        productoTarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" width="150">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
            <p>Disponibilidad: ${producto.cantidad}</p>
            <input type="number" id="cantidad-${producto.id}" min="1" max="${producto.cantidad}" value="1">
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        `;
        productoLista.appendChild(productoTarjeta);
    });
}

function configurarBusqueda() {
    const categoriaFiltro = document.getElementById("categoria-filtro");
    categoriaFiltro.addEventListener("change", filtrarProductos);
}

function filtrarProductos() {
    const categoria = document.getElementById("categoria-filtro").value;
    const productos = JSON.parse(localStorage.getItem("productos"));
    const productosFiltrados = productos.filter(producto =>
        (categoria === "" || producto.categoria === categoria)
    );
    mostrarProductos(productosFiltrados);
}

function agregarAlCarrito(productoId) {
    const productos = JSON.parse(localStorage.getItem("productos"));
    const producto = productos.find(p => p.id === productoId);
    const cantidadInput = document.getElementById(`cantidad-${productoId}`);
    const cantidadDeseada = parseInt(cantidadInput.value);

    if (producto && cantidadDeseada > 0 && cantidadDeseada <= producto.cantidad) {
        const carritoItem = carrito.find(item => item.id === productoId);
        if (carritoItem) {
            carritoItem.cantidad += cantidadDeseada;
        } else {
            carrito.push({ id: productoId, nombre: producto.nombre, precio: producto.precio, cantidad: cantidadDeseada });
        }
        producto.cantidad -= cantidadDeseada;
        localStorage.setItem("productos", JSON.stringify(productos));
        localStorage.setItem("carrito", JSON.stringify(carrito));
        actualizarCarritoCantidad();
        mostrarProductos(productos);
        mostrarCarrito();
    } else {
        alert("Cantidad inválida o fuera de stock.");
    }
}

function configurarCarrito() {
    const verCarritoBoton = document.getElementById("mostrar-carrito-boton");
    const carritoModal = document.getElementById("carrito-modal");
    const cerrarCarritoBoton = document.getElementById("cerrar-modal");
    
    verCarritoBoton.addEventListener("click", () => {
        carritoModal.style.display = "block";
        mostrarCarrito();
    });

    cerrarCarritoBoton.addEventListener("click", () => {
        carritoModal.style.display = "none";
    });

    document.getElementById("pagar-btn").addEventListener("click", pagar);
}

function mostrarCarrito() {
    const carritoDetallesDiv = document.getElementById("carrito-detalles");
    carritoDetallesDiv.innerHTML = "";
    let total = 0;
    carrito.forEach(item => {
        const carritoItem = document.createElement("div");
        carritoItem.className = "carrito-item";
        carritoItem.innerHTML = `
            <p>${item.nombre} - $${item.precio.toFixed(2)} x ${item.cantidad}</p>
            <button onclick="eliminarDeCarrito(${item.id})">Eliminar</button>
        `;
        carritoDetallesDiv.appendChild(carritoItem);
        total += item.precio * item.cantidad;
    });
    document.getElementById("carrito-total").textContent = total.toFixed(2);
}

function eliminarDeCarrito(productoId) {
    const productos = JSON.parse(localStorage.getItem("productos"));
    const producto = productos.find(p => p.id === productoId);
    const carritoItemIndex = carrito.findIndex(item => item.id === productoId);

    if (carritoItemIndex > -1) {
        const carritoItem = carrito[carritoItemIndex];
        carrito.splice(carritoItemIndex, 1);
        if (producto) {
            producto.cantidad += carritoItem.cantidad; // Agregar la cantidad de vuelta al inventario
        }
        localStorage.setItem("productos", JSON.stringify(productos));
        localStorage.setItem("carrito", JSON.stringify(carrito));
        actualizarCarritoCantidad();
        mostrarCarrito();
        mostrarProductos(productos);
    }
}

function actualizarCarritoCantidad() {
    const carritoCantidad = carrito.reduce((total, item) => total + item.cantidad, 0);
    document.getElementById("carrito-contador").textContent = carritoCantidad;
}

function pagar() {
    alert("¡Pago completado!");
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarritoCantidad();
    mostrarCarrito();
}
