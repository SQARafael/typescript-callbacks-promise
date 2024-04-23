function getMsj2(callback:(msj:string)=>void):void{

    const msj="Hola desde una callback";
    callback(msj);

}


getMsj2((msj)=>{
    console.log(msj);
});