$(document).ready(function(){

 


    $("input").on("input",function(e){
        var nombre=$("#nom").val();
        var correo=$("#correo").val();
        var fono =$("#fono").val();
        const $Lblnombre=$("#lblnombre");
        const $lblCorreo=$("#lblcorreo");
        const $lblfono=$("#lblfono")

       
            if(!/^[A-Za-z]+$/.test(nombre) || nombre===""){
                console.log("nombre solo puede contener letras")
                $Lblnombre.text("\u2717 ").css("color", "red"); 
            }else{
                $Lblnombre.text("\u2713 ").css("color", "yellow"); 
            }
        


            if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo) || correo===""){
                console.log("correo no valido")
                $lblCorreo.text("\u2717 ").css("color", "red"); 
            }else{
                $lblCorreo.text("\u2713 ").css("color", "yellow"); 
            }

            if(!/^[0-9]+$/.test(fono)||fono===""){
                console.log("solo numeros")
                $lblfono.text("\u2717 ").css("color", "red"); 
                
            }else{
                $lblfono.text("\u2713").css("color", "yellow");
                
            }


    })

    function esNumero(valor) {
        return /^\d+$/.test(valor); // Devuelve true si el valor contiene solo números
    }



})


