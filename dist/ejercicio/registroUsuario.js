"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrarUusuario = void 0;
function registrarUusuario(usuario) {
    return new Promise((res, req) => {
        setTimeout(() => {
            const usuariosRegistrados = obtenerUsuariosRegistrados();
            const usuarioExistente = usuariosRegistrados.find(u => u.email === usuario.email);
            if (usuarioExistente) {
                req("El usuario ya está registrado");
            }
            else {
                usuariosRegistrados.push(usuario);
                guardarUsuario(usuariosRegistrados);
                res("Usuario guardado correctamente");
            }
        }, 5000);
    });
}
exports.registrarUusuario = registrarUusuario;
function obtenerUsuariosRegistrados() {
    return [
        { nombre: "usuario1", email: "usuario1@mail.com", clave: "clave1" },
        { nombre: "usuario2", email: "usuario2@mail.com", clave: "clave2" }
    ];
}
function guardarUsuario(usuarios) {
    console.log("Usuarios guardados ", usuarios);
}
