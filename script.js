function generateNumber(){

    const min = Math.ceil (document.querySelector("#input-min").value)
    const max = Math.floor(document.querySelector("#input-max").value)

    
    
    if(min <= max ){
        
        const result = Math.floor( Math.random() * (max-min)) + min;

        alert(result)
    }else{
        alert("Numero Primario menor que o segundo!! Digite numeros difertentes")
    }
    
    
} 