const contenedor = document.getElementById("contenedor");
const estado = document.getElementById("estado");
const inputBusqueda = document.getElementById("busqueda");

let listaPokemon = [];

// cargar datos iniciales
const obtenerPokemon = async () => {
    estado.textContent = "Cargando...";

    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");

        if (!response.ok) throw new Error("Error API");

        const data = await response.json();

        const detalles = await Promise.all(
            data.results.map(p => fetch(p.url).then(res => res.json()))
        );

        listaPokemon = detalles;
        mostrarPokemon(listaPokemon);

        estado.textContent = "";
    } catch (error) {
        estado.textContent = "Error al cargar";
    }
};

// mostrar
const mostrarPokemon = (lista) => {
    if (lista.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron resultados</p>";
        return;
    }

    contenedor.innerHTML = lista.map(p => `
        <div style="border:1px solid #ccc; margin:10px; padding:10px;">
            <h3>${p.name}</h3>
            <img src="${p.sprites.front_default}">
            <p>${p.types.map(t => t.type.name).join(", ")}</p>
        </div>
    `).join("");
};

// búsqueda dinámica
inputBusqueda.addEventListener("input", () => {
    const texto = inputBusqueda.value.toLowerCase();

    if (texto.length < 3) {
        estado.textContent = "Escribí al menos 3 letras";
        mostrarPokemon(listaPokemon);
        return;
    }

    estado.textContent = "Buscando...";

    const filtrados = listaPokemon.filter(p =>
        p.name.includes(texto)
    );

    mostrarPokemon(filtrados);
    estado.textContent = "";
});

// iniciar
obtenerPokemon();