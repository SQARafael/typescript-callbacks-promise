"use strict";
function fetchData2(callback) {
    setTimeout(() => {
        const data = "Datos obtenidos del servidor";
        callback(data);
    }, 2000);
}
function processData1(data, callback) {
    setTimeout(() => {
        const result = data.toUpperCase();
        callback(result);
    }, 1000);
}
function saveData(result, callback) {
    setTimeout(() => {
        console.log("Datos guardados: ", result);
        callback();
    }, 1500);
}
function processDataSequence() {
    fetchData2((data) => {
        console.log("Datos obtenidos: ", data);
        processData1(data, (x) => {
            console.log("Datos procesados ", x);
            saveData(x, () => {
                console.log("Secuencia de operaciones finalizada");
            });
        });
    });
}
processDataSequence();
console.log("La secuencia está en progreso...");
