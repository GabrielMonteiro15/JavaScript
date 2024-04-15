function fatorial(n){
    let fat = 1
    //Cria um contador que vai receber o parâmetro 'n'
    //Enquanto o contador for maior do que 1 faz
    //c-- = 'c = c - 1' = c -=1
    for(let c = n; c > 1; c--){
        //fat vai receber fat * c 
        //por exemplo fat = 1 * 5 ai fat recebe 5
        //O proximo vai ser fat = 5 * 4 assim ate chegar em 1
        fat *= c
    }
    //retorna o valor do fatorial
    return fat
}

console.log(fatorial(5))

//Recursividade
function fatorial2(n){
    if (n ==1){
        return 1 
    }else{
        return n * fatorial2(n-1)
    }
}