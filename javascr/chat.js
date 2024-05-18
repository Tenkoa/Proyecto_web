function enviarMensaje() {
    // Obtener el mensaje del input
    var mensaje = document.getElementById("mensajeInput").value;

    // Si el mensaje no está vacío, agregarlo al chat
    if (mensaje.trim() !== "") {
        var chatArea = document.getElementById("chatArea");

        // Crear un nuevo elemento div para el mensaje
        var nuevoMensaje = document.createElement("div");
        nuevoMensaje.classList.add("mensaje");
        nuevoMensaje.textContent = mensaje;

        // Establecer estilo de cuadro para el nuevo mensaje
        nuevoMensaje.style.backgroundColor = "#f0f0f0";
        nuevoMensaje.style.padding = "10px";
        nuevoMensaje.style.marginTop = "10px";
        nuevoMensaje.style.borderRadius = "5px";

        // Agregar el nuevo mensaje al chat
        chatArea.appendChild(nuevoMensaje);

        // Limpiar el input después de enviar el mensaje
        document.getElementById("mensajeInput").value = "";
    }
}
