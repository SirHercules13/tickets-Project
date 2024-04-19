let qtdPista = document.getElementById('qtd-pista').textContent;
let qtdSuperior = document.getElementById('qtd-superior').textContent;
let qtdInferior = document.getElementById('qtd-inferior').textContent;

function comprar(){

    let quantity = parseInt(document.getElementById('qtd').value);
    let ticket = document.getElementById('tipo-ingresso').value;

    if(quantity < 0){
        return alert('Número inválido!');

    }
    
    if(qtdPista <= 0 & qtdSuperior <= 0 & qtdInferior <= 0) {
        return alert('Ingressos Esgotados!');

    }else{
        
        if(ticket == 'pista'){
            buyPista(quantity);
            
        } else if(ticket == 'superior'){
            buySuperior(quantity);

        }else{
            buyInferior(quantity);
        }
    }

}


function buyPista(qtd){
   parseInt(qtdPista);

   if(qtdPista < qtd){
    alert('Quantidade de ingressos indisponível!');

   }else{
    alert('Você tem certeza?');

    qtdPista = qtdPista - qtd;
    document.getElementById('qtd-pista').textContent = qtdPista;
    alert('Compra realizada com sucesso!');
   }
} 

function buySuperior(qtd){
    parseInt(qtdSuperior);

    if(qtd > qtdSuperior){
       alert('Quantidade de ingressos indisponível!');
       
    }else{
        alert('Você tem certeza?');

        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');

    }
}

function buyInferior(qtd){
    parseInt(qtdInferior);

    if(qtd > qtdInferior){
        alert('Quantidade de ingressos indisponível!');

    }else{
        alert('Você tem certeza?');

        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}



