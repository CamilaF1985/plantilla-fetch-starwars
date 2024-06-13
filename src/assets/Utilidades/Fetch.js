// función para traer el listado de los personajes
const fetchPersonajes = async () => {
    try {
        const response = await fetch('https://www.swapi.tech/api/people/', {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Verificar si la respuesta es OK
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        // Depuración: mostrar los resultados en la consola
        console.log(data.results);

        return data.results;
    } catch (error) {
        // Manejo de errores de red o respuesta
        console.log('Error:', error.message);

        return { error: { message: error.message } };
    }
};

// función para traer los detalles de un personaje por su id
const fetchPersonaje = async (uid) => {
    try {
        const response = await fetch(`https://www.swapi.tech/api/people/${uid}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Verificar si la respuesta es OK
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return {
            properties: data.result.properties,
            description: data.result.description, // Agregar la descripción al objeto retornado
        };
    } catch (error) {
        console.log('Error al obtener personaje:', error.message);
        return { error: { message: error.message } };
    }
};

// Exportar las funciones
export { fetchPersonajes, fetchPersonaje };



