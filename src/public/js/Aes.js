
function tipoencriptado(){
    var  n="no";
    
        for(var i=0; i<document.f1.tipo.length;i++){
      
            if(document.f1.tipo[i].checked){
             if( document.f1.tipo[i].value == 16){
                
            

                const b = document.createElement("a");
                b.href="/encriptar16"
                b.click();
                n="si"
                
            }
             if( document.f1.tipo[i].value == 24){
                
                
                const b = document.createElement("a");
                b.href="/encriptar24"
                b.click();
                n="si"
                
            }
             if( document.f1.tipo[i].value == 32){
                
                
                const b = document.createElement("a");
                b.href="/encriptar32"
                b.click();
                n="si"
                
            }
            }
    
        }
        if(n=="no"){
            alert("eliga un tipo de AES")
        }
    }
    var mensaje;
const n="no";
function tipodesencriptado(){
  
    for(var i=0;i<document.f1.tipo.length;i++){
        if(document.f1.tipo[i].checked){
            if( document.f1.tipo[i].value == 16){
               
               console.log(n)
               const b = document.createElement("a");
               b.href="/descifrar16"
               b.click();
               console.log("cambio")
               console.log(n)
            }
            if( document.f1.tipo[i].value == 24){
               
               console.log(n)
               const b = document.createElement("a");
               b.href="/descifrar24"
               b.click();
               console.log("cambio")
               console.log(n)
            }
            if( document.f1.tipo[i].value == 32){
               
               console.log(n)
               const b = document.createElement("a");
               b.href="/descifrar32"
               b.click();
               console.log("cambio")
               console.log(n)
            }
        }
}
    if(n="no"){
        alert("eliga un tipo de AES")
    }
}