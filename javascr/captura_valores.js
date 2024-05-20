$(document).ready(function(){

    $("input").on("input", function(e) {
        var nombre = $("#nom").val();
        var correo = $("#correo").val();
        var fono = $("#fono").val();
        var con = $("#pass").val();
        const $Lblnombre = $("#lblnombre");
        const $lblCorreo = $("#lblcorreo");
        const $lblfono = $("#lblfono");
        const $lblpassword = $("#lblpassword");

        if (!/^[A-Za-z]+$/.test(nombre) || nombre === "") {
            console.log("nombre solo puede contener letras");
            $Lblnombre.text("\u2717 ").css("color", "red"); 
        } else {
            $Lblnombre.text("\u2713 ").css("color", "yellow"); 
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo) || correo === "") {
            console.log("correo no valido");
            $lblCorreo.text("\u2717 ").css("color", "red"); 
        } else {
            $lblCorreo.text("\u2713 ").css("color", "yellow"); 
        }

        if (!/^[0-9]+$/.test(fono) || fono === "") {
            console.log("solo numeros");
            $lblfono.text("\u2717 ").css("color", "red"); 
        } else {
            $lblfono.text("\u2713").css("color", "yellow");
        }

        if (con === ""){
            console.log("Contraseña vacia");
            $lblpassword.text("\u2717 ").css("color", "red");
        } else {
            $lblpassword.text("\u2713").css("color", "yellow");
        }
    });

    function esNumero(valor) {
        return /^\d+$/.test(valor); // Devuelve true si el valor contiene solo números
    }

    // Agregar evento click al botón de registrarse
    $("#sub1").on("click", function() {
        // Redireccionar a perfil.html si todos los campos están correctamente llenados
        if ($("#lblnombre").css("color") === "rgb(255, 255, 0)" &&
            $("#lblcorreo").css("color") === "rgb(255, 255, 0)" &&
            $("#lblfono").css("color") === "rgb(255, 255, 0)"   &&
            $("#lblpassword").css("color") === "rgb(255, 255, 0)") {
            window.location.href = "perfil.html";
        }
    });

    $("#sub1").click(function(){
        var nombre = $("#nom").val();
        var correo = $("#correo").val();
        var numero = $("#fono").val();
        var contraseña = $("#pass").val();

        if(nombre === "" || correo === "" || numero === "" || contraseña === ""){
            alert("Todos los valores deben ser llenados ");
        }
    });

});
