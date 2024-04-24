import { Usuario } from "./usuario.interface";

export function registrarUusuario(usuario: Usuario): Promise<string> {


    return new Promise((res, req) => {
        setTimeout(() => {
            const usuariosRegistrados: Usuario[] = obtenerUsuariosRegistrados();
            const usuarioExistente = usuariosRegistrados.find(u => u.email === usuario.email);

            if (usuarioExistente) {
                req("El usuario ya está registrado");
            } else {
                usuariosRegistrados.push(usuario);
                guardarUsuario(usuariosRegistrados);
                res("Usuario guardado correctamente");
            }
        }, 5000);
    });
}


function obtenerUsuariosRegistrados(): Usuario[] {
    return [
        { nombre: "usuario1", email: "usuario1@mail.com", clave: "clave1" },
        { nombre: "usuario2", email: "usuario2@mail.com", clave: "clave2" }
    ];
}


function guardarUsuario(usuarios: Usuario[]): void {
    console.log("Usuarios guardados ", usuarios);
}