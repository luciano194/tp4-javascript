// Array de productos
const productos = [
    { id: 1, nombre: "Notebook", precio: 1500, categoria: "tecnologia", enStock: true },
    { id: 2, nombre: "Mouse", precio: 200, categoria: "tecnologia", enStock: true },
    { id: 3, nombre: "Teclado", precio: 300, categoria: "tecnologia", enStock: false },
    { id: 4, nombre: "Remera", precio: 100, categoria: "ropa", enStock: true },
    { id: 5, nombre: "Pantalón", precio: 250, categoria: "ropa", enStock: false },
    { id: 6, nombre: "Auriculares", precio: 400, categoria: "tecnologia", enStock: true },
    { id: 7, nombre: "Campera", precio: 800, categoria: "ropa", enStock: true },
    { id: 8, nombre: "Tablet", precio: 1200, categoria: "tecnologia", enStock: false },
];

// DOM
const contenedor = document.getElementById("productos");
const filtroCategoria = document.getElementById("categoria");
const filtroPrecio = document.getElementById("precio");
const filtroStock = document.getElementById("stock");
const filtroBusqueda = document.getElementById("busqueda");
const precioValor = document.getElementById("precioValor");

// FUNCIONES PRIMERO
const mostrarProductos = (lista) => {
    contenedor.innerHTML = lista.map(p => `
        <div style="border:1px solid #ccc; margin:10px; padding:10px;">
            <h3>${p.nombre}</h3>
            <p>Precio: $${p.precio}</p>
            <p>Categoría: ${p.categoria}</p>
            <p>${p.enStock ? "En stock" : "Sin stock"}</p>
        </div>
    `).join("");
};

const filtrarProductos = () => {
    let resultado = productos;

    if (filtroCategoria.value !== "todos") {
        resultado = resultado.filter(p => p.categoria === filtroCategoria.value);
    }

    resultado = resultado.filter(p => p.precio <= filtroPrecio.value);

    if (filtroStock.checked) {
        resultado = resultado.filter(p => p.enStock);
    }

    resultado = resultado.filter(p =>
        p.nombre.toLowerCase().includes(filtroBusqueda.value.toLowerCase())
    );

    mostrarProductos(resultado);
};

// EVENTOS DESPUÉS
filtroPrecio.addEventListener("input", () => {
    precioValor.textContent = filtroPrecio.value;
    filtrarProductos();
});

filtroCategoria.addEventListener("change", filtrarProductos);
filtroStock.addEventListener("change", filtrarProductos);
filtroBusqueda.addEventListener("input", filtrarProductos);

// INICIO
mostrarProductos(productos);