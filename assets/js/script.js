// 1. Crear una función asíncrona para obtener los datos de la URL.
async function fetchAlbumTitles() {
    const url = 'https://jsonplaceholder.typicode.com/photos';

    // 2. Dentro de un bloque Try/Catch, utilizar el método fetch mediante la instrucción await para recibir el valor directamente de la promesa.
    try {
        const response = await fetch(url);
        const data = await response.json();

        // 3. Utilizar un método de iteración de arreglos (por ejemplo: forEach) para mostrar solamente los primeros 20 títulos de los datos recibidos.
        data.slice(0, 20).forEach(album => {
            console.log(album.title);
        });

    } catch (error) {
        console.error('Error fetching album titles:', error);
    }
}

// 5. Crear una función que retorne una promesa después de tres (3) segundos utilizando setTimeout. El mensaje a retornar debe ser un string que indique: “Información Enviada”.
function delayMessage() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Información Enviada");
        }, 3000);
    });
}

// 6. Crear una función asíncrona que permita recibir el mensaje de la promesa creada en el requerimiento cinco (5), de forma directa con await, para ser mostrado en la consola del navegador, agregando el llamado a las dos funciones principales.
async function main() {
    await fetchAlbumTitles();
    const message = await delayMessage();
    console.log(message);
}

// Llamar la función principal
main();
