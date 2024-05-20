$(document).ready(function () {
    $("#reservarBtn").click(function () {
        console.log("Boton clickeado");
        var totalSeleccionados = $(".calendar .day-cell input.custom-checkbox:checked").length;
        console.log("Cantidad seleccionada: " + totalSeleccionados);
        if (totalSeleccionados >= 2) {
            $("#mensajeReserva").show();
        } else {
            $("#mensajeReserva").hide();
        }
    });
}); 