const formulario = document.getElementById("formulario");
const input = document.getElementById("tareaInput");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");

// actualizar contador
const actualizarContador = () => {
    const pendientes = document.querySelectorAll("li:not(.completada)").length;
    contador.textContent = pendientes;
};

// agregar tarea
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const texto = input.value.trim();

    if (texto === "") return; // no permite vacíos

    const li = document.createElement("li");
    li.textContent = texto;

    // marcar como completada
    li.addEventListener("click", () => {
        li.classList.toggle("completada");
        actualizarContador();
    });

    // botón eliminar
    const btn = document.createElement("button");
    btn.textContent = "X";

    btn.addEventListener("click", (e) => {
        e.stopPropagation(); // evita que marque completada
        li.remove();
        actualizarContador();
    });

    li.appendChild(btn);
    lista.appendChild(li);

    input.value = "";
    actualizarContador();
});