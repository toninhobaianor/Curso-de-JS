function carregar(){
    let com = document.getElementById('inicio')
    let and = document.getElementById('passo')
    let ult = document.getElementById('fim')
    let lis = document.getElementById('res')

    if(com.value.length == 0 || and.value.length == 0 || ult.value.length == 0){
        lis.innerHTML = 'impossivel contar'
        window.alert('tem algo errado ai')
    }else{
        lis.innerHTML = 'contando...'
        let i = Number(com.value)
        let p = Number(and.value)
        let f = Number(ult.value)
        if(p == 0){
            alert('passo invalido,considerando PASSO 1')
            p = 1
        }
        if (i < f){
            for(let c = i;c <= f; c+=p){
                lis.innerHTML += '  ' + c + '-->'

            }
        }else{
            for(let c = i;c >= f;c -= p){
                lis.innerHTML += '  ' + c
            }

        }      
    }   
}