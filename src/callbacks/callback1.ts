function fetchData(callback:(data:string)=>void):void{

    setTimeout(()=>{
        const data="Datos obtenidos del servidor";

        callback(data);

    },2000);


}



function processData(data:String):void{
    console.log("Procesando datos: ",data);
}

fetchData(processData);


console.log("La operación asincronica está en proceso...")