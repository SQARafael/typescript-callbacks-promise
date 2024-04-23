function fetchData2(callback:(data:string)=>void):void{

    setTimeout(()=>{
        const data="Datos obtenidos del servidor";

        callback(data);

    },2000);


}


function processData1(data:String, callback:(result:string)=>void):void{
    setTimeout(()=>{
        const result= data.toUpperCase();
        callback(result);

    },1000)
}


function saveData(result:string, callback:()=>void):void{
    setTimeout(()=>{
        console.log("Datos guardados: ",result);
        callback();

    },1500)
}


function processDataSequence():void{
    fetchData2((data)=>{
        console.log("Datos obtenidos: ",data);
        processData1(data, (x)=>{
            console.log("Datos procesados ",x);
            saveData(x, ()=>{
                console.log("Secuencia de operaciones finalizada")
            })
        })
    });
}


processDataSequence();

console.log("La secuencia está en progreso...")