"use strict";
function getMsj2(callback) {
    const msj = "Hola desde una callback";
    callback(msj);
}
getMsj2((msj) => {
    console.log(msj);
});
