let val = document.querySelector('input#txtnu')
let dad = document.querySelector('div#dados')
let anl = document.querySelector('select#res')
let valores = []


function isnumeric(n){
    if(Number(n) >= 1 && Number(n)<= 100){
        return true
    } else {
        return false
    }

}

function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}


function colocar(){
    if(isnumeric(val.value) && !inlista(val.value, valores)){
        valores.push(Number(val.value))
        let item = document.createElement('option')
        item.text = 'valor ' + val.value  + ' adicionado'
        anl.appendChild(item)
        dad.innerHTML = ''
    }else{
        alert('numero já adicionado ou não existente')
    }
    val.value = ' '
    val.focus()
}

function investigar(){
    if(valores.length == 0){
        alert('Adicione valores na lista')
    } else {
        let tot = valores.length

        dad.innerHTML = ''
        dad.innerHTML += 'ao todos temos ' + tot + ' numeros adicionados'

    }
}