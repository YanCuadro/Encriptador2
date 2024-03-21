(() => {
    'use strict'

    const script = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    }
    
    const letras = ['a','e','i','o','u',]
    
    // Funcion para encriptar
    const encriptar = (mensaje) => {
    
        let nuevoMensaje = '';
        for (let i of mensaje) {
        
            if (letras.includes(i)) {
        
                nuevoMensaje += script[i]
        
                
            } else {
                nuevoMensaje += i
            }
        }
        
        return nuevoMensaje;
    
    }
    
    // Funcion para desencriptar
    const desencriptar = (mensaje) => {
        
        let segundoMens = mensaje;
    
        for (let i = 0; i < mensaje.length; i++) {
            
            if (letras.includes(mensaje[i])) {
    
                if (mensaje[i + 1] == script[mensaje[i]][1]) {
    
                    segundoMens = segundoMens.replace(script[mensaje[i]], mensaje[i]);
                }
            }
        }
    
    
        return segundoMens;
    
    }
    
    // let mensaje = 'fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!'
    // let mensaje2 = 'felicidades por enfrentar este desafio y haberlo concluido con exito!'
    
    // console.log(encriptar(mensaje2));
    // console.log(desencriptar(mensaje));
    
    // Botones
    const encriptarB = document.querySelector('.encriptar');
    const desencriptarB = document.querySelector('.desencriptar');
    const borrarB = document.querySelector('.borrar');
    const copiarB = document.querySelector('.copiar');
    
    // TextAreas
    const textAreaE = document.getElementById('texto');
    const textAreaR = document.getElementById('textoR');
    
    let contenido = '';
    
    encriptarB.addEventListener('click', () => {
        
        contenido = textAreaE.value;
    
        textAreaR.value = encriptar(contenido);
    })
    
    desencriptarB.addEventListener('click', () => {
    
        contenido = textAreaE.value;
    
        textAreaR.value = desencriptar(contenido);
    })
    
    borrarB.addEventListener('click', () => {
    
        textAreaE.value = '';
        textAreaR.value = '';
    })
    
    copiarB.addEventListener('click', () => {
    
        textAreaR.select();
        textAreaR.setSelectionRange(0, 99999); // Para dispositivos móviles
    
        // Copiar el texto seleccionado al portapapeles
        document.execCommand('copy');
    
        // Indicar al usuario que el texto ha sido copiado
        alert('¡Texto copiado al portapapeles!');
    })

})();
