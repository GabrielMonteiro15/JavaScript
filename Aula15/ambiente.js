let num = [5, 8, 2, 10, 4]
//Colocar um valor na posicão 5 do array, no caso um sexto numero
num[5] = 11

//Colocar um valor na ultima posição
num.push(7)

num.length
num.sort()

console.log(`O vetor tem ${num.length} poisções`)
console.log(`O primeiro valor de vetor é ${num[0]}`)

//Mostras todos os valores do array
for(let pos = 0;pos <  num.length; pos++ ){
    console.log(`A posição ${pos} tem o némero ${num.pos}`)
}

//Simplificando  o for 
//Para  cada posição em num

for(let pos in num){
    console.log(num.pos)
}

//fazer um busca da chave que armazena o valor 10
//Nesse caso ele me retorna a chave 3 
num.indexOf(10)

let pos = num.indexOf()
if(pos == -1){
    console.log(`Valor não encontrado!`)
}else{
    console.log(`Valor na posição ${pos}`)
}