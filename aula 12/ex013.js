var atual = new Date()
var hora = atual.getHours()
console.log(`agora são ${hora} horas`)
if (0 < hora && hora <= 6){
    console.log('Boa madrugada')
}else if(hora <= 12){
    console.log('bom dia')
}else if(hora <= 18){
    console.log('boa tarde')
}else{
    console.log('boa noite')
}