let num = [1, 2, 6, 4, 3]
num.push(5)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o terceiro valor e ${num[2]}`)
/*var tam = num.length
var c = 0
while(c < tam){
    console.log(num[c])
    c += 1

}*/



/*for(let pos = 0; pos < num.length; pos++){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}*/



for(let pos in num){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}

