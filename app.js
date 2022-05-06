// Formularios:
const formulario = document.getElementById('frm-gndr')
const formulario_gnr = document.getElementById('frm-gndr-itm-i');

//valores_encerrados:
const generador = {
    letras_minuscululas : 'abcdefghijklmnopqrstuvwxyz',
    letras_mayusculas   : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeros             : '0123456789',
    caracteres          : '({[@/¡?¿!]})'
}
const generadori = {
    letra : 25,
    numero: 9,
    caracter:11,
    aleario: -1
}

const valores = {
    contador: 0,
    palabra_final : '',
    palabra_aleatorio : [],
    copiar : false
}

//eventos:
formulario.addEventListener('submit', (e)=>{ e.preventDefault(); validar_generador(); })
formulario_gnr.addEventListener('click', (e)=>{ e.preventDefault(); generador_copiar(); })
formulario.ipt_lenght.addEventListener('change', ()=>{ id_lenght.innerText = ipt_lenght.value; })

//funciones:
const validar_generador =()=>{
    if  ((!formulario.letra_i.checked) && (!formulario.letra_ii.checked) &&
        (!formulario.numero.checked) && (!formulario.caracter.checked)){ return }
    else{ 
        if(formulario.ipt_lenght.value < 4){ formulario.ipt_lenght.value = 4 }
        else if(formulario.ipt_lenght.value > 40){ formulario.ipt_lenght.value = 40 }
        generador_aleatorio();   
    }
}

const generador_copiar = () =>{
    if(!valores.copiar){ return }
    formulario_gnr.ipt_generado.select();
    document.execCommand('copy');
    formulario_gnr.ipt_generado.blur();
    formulario_gnr.classList.add('copy')
    setTimeout(function(){ formulario_gnr.classList.remove('copy'); },1000)
}

const generador_aleatorio =()=>{
    while(valores.contador < formulario.ipt_lenght.value){
        let letra_i                 = generador.letras_mayusculas[Math.round(Math.random()*generadori.letra)];
        let letra_ii                = generador.letras_minuscululas[Math.round(Math.random()*generadori.letra)];
        let numero_i                = generador.numeros[Math.round(Math.random()*generadori.numero)];
        let caracter_i              = generador.caracteres[Math.round(Math.random()*generadori.caracter)];
        
        if(formulario.letra_i.checked)  { valores.palabra_aleatorio.push(letra_i); generadori.aleario+=1;       }
        if(formulario.letra_ii.checked) { valores.palabra_aleatorio.push(letra_ii); generadori.aleario+=1;      }
        if(formulario.numero.checked)   { valores.palabra_aleatorio.push(numero_i); generadori.aleario+=1;      }
        if(formulario.caracter.checked) { valores.palabra_aleatorio.push(caracter_i); generadori.aleario+=1;    }
        
        valores.palabra_final +=valores.palabra_aleatorio[Math.round(Math.random()*generadori.aleario)];
        valores.palabra_aleatorio   = []; generadori.aleario = -1; valores.contador+=1;        
    }
    
    valores.contador = 0;
    formulario_gnr.ipt_generado.value = valores.palabra_final ;
    formulario_gnr.btn_copy.classList.add('on');
    window.id_lenght.innerText = ipt_lenght.value;
    valores.palabra_final  = ''; valores.copiar = true
}








