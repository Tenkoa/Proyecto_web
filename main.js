// Verificar si los datos están en el localStorage
var storedCategories = localStorage.getItem('mealCategories');

if (storedCategories) {
    // Si hay datos en el localStorage, utilizarlos directamente
    populateCategories(JSON.parse(storedCategories));
} else {
    // Si no hay datos en el localStorage, hacer la solicitud a la API
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(response => response.json())
    .then(data => {
        // Guardar los datos en el localStorage para uso futuro
        localStorage.setItem('mealCategories', JSON.stringify(data));
        // Llamar a la función para mostrar las categorías
        populateCategories(data);
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Función para mostrar las categorías
function populateCategories(data) {
    var container = document.getElementById('container'); // Obtener el contenedor donde se insertarán los elementos
    
    for (let i = 0 ; i < data.categories.length; i++){
        var category = data.categories[i];

        // Crear un nuevo div para cada elemento
        var div = document.createElement('div');
        
        // Crear elementos HTML dentro del div
        var tituloPlato = document.createElement('h2');
        var descPlato = document.createElement('p');
        var imgPlato = document.createElement('img');

        // Asignar los valores de la API a los elementos HTML
        tituloPlato.textContent = category.strCategory;
        descPlato.textContent = category.strCategoryDescription;
        imgPlato.src = category.strCategoryThumb;
        imgPlato.alt = category.strCategory;

        // Agregar los elementos al div
        div.appendChild(tituloPlato);
        div.appendChild(descPlato);
        div.appendChild(imgPlato);

        // Agregar el div al contenedor
        container.appendChild(div);
    }
}
