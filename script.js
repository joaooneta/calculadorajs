function Calcular(num){
    if(num == 'c'){
        document.getElementById('tela').value = '';
    }else if(num == '='){
        let resultado = eval(document.getElementById('tela').value);
        document.getElementById('tela').value = resultado;
    }else{
        document.getElementById('tela').value += num;
    }
}