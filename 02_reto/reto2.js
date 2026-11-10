const estudiantes = [
    { id: 1, nombre: 'Ana', edad: 20 },
    { id: 2, nombre: 'Juan', edad: 22 },
    { id: 3, nombre: 'María', edad: 21 }
];

function buscarEstudiantePorId(id) {
    return new Promise((resolve, reject) => {
        

        if (estudianteEncontrado) {
            resolve(estudianteEncontrado);
        } else {
            reject(`Error: No existe un estudiante con el ID ${id}.`);
        }
    });
}


console.log("--- INICIO DE PRUEBAS CON PROMESAS ---");


console.log("Búsqueda del estudiante con ID 2");
buscarEstudiantePorId(2)
    .then(estudiante => {
        console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
    })
    .catch(error => {
        console.error(error);
    });


console.log("Búsqueda del estudiante con ID 1");
buscarEstudiantePorId(1)
    .then(estudiante => {
        console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
    })
    .catch(error => {
        console.error(error);
    });


console.log("Búsqueda del estudiante con ID 10");
buscarEstudiantePorId(10)
    .then(estudiante => {
        console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
    })
    .catch(error => {
        console.error(error);
    });



document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("searchBtn");
    const studentIdInput = document.getElementById("studentId");
    const resultContainer = document.getElementById("resultContainer");

    searchBtn.addEventListener("click", () => {
        const idValue = studentIdInput.value;

        if (!idValue) {
            resultContainer.className = "result-box error";
            resultContainer.textContent = "Por favor, ingrese un número de ID válido.";
            return;
        }

      
        buscarEstudiantePorId(idValue)
            .then(estudiante => {
                resultContainer.className = "result-box success";
                resultContainer.textContent = `Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`;
            })
            .catch(error => {
                resultContainer.className = "result-box error";
                resultContainer.textContent = error;
            });
    });
});