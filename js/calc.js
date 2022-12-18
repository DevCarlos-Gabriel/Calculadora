function insert(num){
    var numero = document.getElementById('calc').innerHTML;
    document.getElementById('calc').innerHTML = numero + num;
}

function clean(){
    document.getElementById('calc').innerHTML = "";
}

function back_space(){
    var bs = document.getElementById('calc').innerHTML;
                                                /*Retira o ultimo item adicionado*/
    document.getElementById('calc').innerHTML =  bs.substring(0, bs.length -1);
}

function calc_num(){
    var result = document.getElementById('calc').innerHTML;

    var porcentSinal = result.indexOf('%');
    
        if(porcentSinal === -1){
            document.getElementById('calc').innerHTML =  eval(result);
        }else
        {
            var porcent = result.substring(0, porcentSinal);
            var number = result.substring(porcentSinal +1, result.length);
            var calc = (porcent/100)*number;
            document.getElementById('calc').innerHTML = calc;
        }
    }

/*Raiz quadrada*/
function square_root(){
    var result = document.getElementById('calc').innerHTML;
    var root = result.substring(0, result.length);
    document.getElementById('calc').innerHTML =  Math.sqrt(root);
}

/*Porcentagem*/