import { registrarUusuario } from "./registroUsuario";
import { Usuario } from "./usuario.interface";



const nuevoUsuario: Usuario={
    nombre:"Nuevo Usuario",
    email:"usuario2@mail.com",
    clave:"1234"
}

registrarUusuario(nuevoUsuario)
    .then((msj)=>console.log(msj))
    .catch((error)=>console.log("error: ",error));