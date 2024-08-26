const codigo_encriptacion = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat",
};

function encriptar(){
    let texto = document.getElementById("mensaje").value;
    
    if(texto.length > 0){
        let resultado_encriptado = "";
        for(let i = 0; i < texto.length; i++){
            let caracter = texto.charAt(i);
            let cifrado = codigo_encriptacion[caracter] ?? caracter;
            resultado_encriptado += cifrado;
        }
        document.getElementById("resultado_encriptado").innerHTML = resultado_encriptado;
        mostrar_resultado();
    }
}

function desencriptar(){
    let texto = document.getElementById("mensaje").value;
    if(texto.length > 0){
        let resultado_desencriptado = texto;
        for (const [letra, encriptado] of Object.entries(codigo_encriptacion)) {
            resultado_desencriptado = resultado_desencriptado.replaceAll(encriptado, letra);
        }
        
        document.getElementById("resultado_encriptado").innerHTML = resultado_desencriptado;
        mostrar_resultado();
    }
}

function mostrar_resultado(){
    let resultado = document.getElementById("resultado_encriptado");
    let mensaje_inicial = document.getElementById("mensaje_inicial");
    mensaje_inicial.style.display = "none";
    resultado.style.display = "block";
}