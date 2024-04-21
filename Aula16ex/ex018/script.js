let num = document.getElementById("inum")
let lista = document.getElementById("flista")
let valores = []



function isNumero(n){ //função para analisar que um numero é valido
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
}
function isLista(n){ //funçao para analisar se o número esta na lista
    if(valores.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}
function add(){
    //Verifica as funçoes acima 
    if(isNumero(num.value) && !isLista(num.value)){
        valores.push(Number(num.value))
        console.log(valores)
        
            //Cria uma option dentre da lista
            let item = document.createElement('option')
            item.text = `${num.value} adicionado a lista`
            //Colocar a option como uma Child de lista
            lista.appendChild(item)
              
    }else{
        alert("Número invalido ou já encontrado na lista!")
    }
    num.value = ''
    num.focus()

}

function finaliza(){
        let res = document.querySelector("div#res")
        if(valores.length == 0){
            alert("Adicione valores primeiro")
        }else{
            let tot = valores.length
            if(res != null){
                res.innerHTML += `<p>Ao todo tem,os ${tot} números cadastros </p>`
            }
        }

}