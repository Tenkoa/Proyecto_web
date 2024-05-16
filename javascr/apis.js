fetch("https://randomuser.me/api/?results=10")
.then(Response=>Response.json())
.then(data=>{

    var container=document.getElementById("div1")
    console.log(data)
    for(let i =0;i<data.results.length;i++){
        var resultado=data.results[i];
        
        var especialidadAleatoria=randomEspecialidad();



        var div=document.createElement('div');
        var nombre=document.createElement('h2');
        var especialidad=document.createElement('p')
        var imgMedico=document.createElement('img');


        nombre.textContent='  Nombre '+resultado.name.first+ ' Apellido ' +resultado.name.last
        imgMedico.src=resultado.picture.large;
        especialidad.textContent=especialidadAleatoria;


        div.appendChild(nombre);
        div.appendChild(imgMedico);
        div.appendChild(especialidad);
        container.appendChild(div);

    }   

})

function randomEspecialidad(){

    var especialidad=["Cardiologo","cirujano","Psiquiatra","Oncología"];


    return especialidad[Math.floor(Math.random()*especialidad.length)];



}
