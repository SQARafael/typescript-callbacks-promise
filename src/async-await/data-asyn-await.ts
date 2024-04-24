function obtenerDatosServidor():Promise<string>{
    return new Promise(
        (res)=>{
            setTimeout(()=>{
                res("Datos del servidor obtenidos");
            },2000);
        }
    );
}



async function obtenerDatosServidorAsincrono(): Promise<void> {
    try{
        console.log("Iniciando proceso de asincronía...");

        const datos= await obtenerDatosServidor();
        console.log("Los datos son: ", datos);

        console.log("Operación asincrona completada");
    }catch(error){
        console.log("Error ", error);
    }
    
}

obtenerDatosServidorAsincrono();