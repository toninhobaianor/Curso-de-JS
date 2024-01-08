function gerar(){
    let valor = document.getElementById('num')
    let tabua = document.getElementById('res')
    if(valor.value.length == 0){
        window.alert('digite um numero')
    }else{
        let v = Number(valor.value)
        let c = 1
        tabua.innerHTML = ' '
        while(c <= 10){
            let item = document.createElement('option')
            item.text = v  + ' x ' + c + ' = ' + (c * v)
            item.value = 'tab' + c
            tabua.appendChild(item)
            c++
            }
    }
    


}