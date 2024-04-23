function getMsj():Promise<string>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Hola desde una promesa");
        });
    });
}


getMsj().then((msj)=>{
    console.log(msj);
}).catch((error)=>{
    console.log("Error: ", error);
})