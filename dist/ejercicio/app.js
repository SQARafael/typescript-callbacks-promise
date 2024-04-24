"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const registroUsuario_1 = require("./registroUsuario");
const nuevoUsuario = {
    nombre: "Nuevo Usuario",
    email: "usuario2@mail.com",
    clave: "1234"
};
(0, registroUsuario_1.registrarUusuario)(nuevoUsuario)
    .then((msj) => console.log(msj))
    .catch((error) => console.log("error: ", error));
