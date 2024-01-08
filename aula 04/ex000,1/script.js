// valores numericos
let val = document.getElementById('num')
let tx = document.getElementById('divi')
let op = document.getElementsByName('taxa')
let c = 4.6
// locais de respostas
let ltx1 = document.getElementById('restx')
let lnu1 = document.getElementById('resnum')
let ltx2 = document.getElementById('restx1')
let lnu2 = document.getElementById('resnum1')
function calcular(){
    if(val.value.length == 0 || tx.value.length == 0){
        alert('tem algo errado')
    } else {
        let valor = Number(val.value)
        let t = Number(tx.value)
        let d = (valor*(t * c))/100
        let novo = valor - d
        if(op[0].checked){
            ltx1.innerHTML = 'o valor que o cliente pagou'
            lnu1.innerHTML = valor + 'R$'
            ltx2.innerHTML = 'o valor recebido'
            lnu2.innerHTML = novo + 'R$'
        } else {
            let cabu = valor + d
            let cal = (cabu *(t * c))/100
            let nv = cabu - cal
            ltx1.innerHTML = 'para que você receba'
            lnu1.innerHTML = valor + 'R$'
            ltx2.innerHTML = 'seu cliente tem que pagar'
            lnu2.innerHTML = cabu + 'R$'

        }
       
    }

}