var valor_inicial = null;
var valor_total = null;
var segundo_valor=null;


function Calcula(e)
{
    var e_class = document.getElementById(e.id).classList;
    var e_value = document.getElementById(e.id).value;
    if(e_class.contains("operadores")){
        Operadores(e);
            console.log('------------------------------------');
            console.log("operadores");
            console.log('------------------------------------');
            AdicionarNaTela(e);
    }else if(e_class.contains("numero")){
        if(valor_inicial!==null)
        {
            valor_inicial += e_value;
            AdicionarNaTela(e);
        }
        
    }
}
function Operadores(o)
{
    var e_val = document.getElementById(o.id).value;
    switch(e_val)
    {
        case 'X':
        {

            break;
        }
            
    }
}

function AdicionarNaTela(elemento)
{
   
    var resultado = document.getElementById('resultado'); 

    var id_elemento = elemento.id;
    var valor_elemento = document.getElementById(id_elemento).value;
    
    resultado.value += valor_elemento;
    
}