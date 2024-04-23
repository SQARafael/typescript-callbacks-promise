"use strict";
function fetchData(callback) {
    setTimeout(() => {
        const data = "Datos obtenidos del servidor";
        callback(data);
    }, 2000);
}
function processData(data) {
    console.log("Procesando datos: ", data);
}
fetchData(processData);
console.log("La operación asincronica está en proceso...");
