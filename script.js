document.addEventListener("DOMContentLoaded", () => {
    console.log("SOFIA está lista y funcionando.");

    // Mostrar mensaje de bienvenida
    const bienvenida = document.createElement("div");
    bienvenida.style.padding = "20px";
    bienvenida.style.fontSize = "22px";
    bienvenida.innerHTML = "SOFÍA está activa y lista para ayudarte 💛";
    document.body.appendChild(bienvenida);

    // Función base para módulos futuros
    function mostrarModulo(nombre) {
        alert("Abriendo módulo: " + nombre);
    }

    // Ejemplo de botones (puedes agregar más)
    const botones = [
        "Legal",
        "Finanzas",
        "Salud",
        "Educación",
        "Motivación",
        "Recetas"
    ];

    const contenedor = document.createElement("div");
    contenedor.style.marginTop = "30px";

    botones.forEach(nombre => {
        const btn = document.createElement("button");
        btn.innerText = nombre;
        btn.style.margin = "10px";
        btn.style.padding = "15px 25px";
        btn.style.fontSize = "18px";
        btn.style.borderRadius = "10px";
        btn.style.border = "none";
        btn.style.cursor = "pointer";
        btn.style.background = "#ffffff";
        btn.style.color = "#8a00ff";
        btn.style.fontWeight = "bold";
        btn.onclick = () => mostrarModulo(nombre);
        contenedor.appendChild(btn);
    });

    document.body.appendChild(contenedor);
});
