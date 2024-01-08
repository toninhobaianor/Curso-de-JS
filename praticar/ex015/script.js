function carregar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] verifique os dados e tente novamente!')

    }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked){
           genero = 'Homem'
           if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'homem criança.png')
           }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'homem jovem.png')
           }else if(idade < 50){
               //adulto
               img.setAttribute('src', 'homem adulto.png')
           }else {
               //idoso
               img.setAttribute('src', 'homem velho.png')
           }
       }else if(fsex[1].checked){
           genero = 'Mulher'
           if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'mulher criança.png')
           }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'mulher jovem.png')
           }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'mulher adulta.png')
           }else {
                //idoso
                img.setAttribute('src', 'mulher velha.png')
           }
       }
       res.style.textAlign = 'center'
       res.innerHTML = 'detectamos ' + genero + ' com ' + idade + ' anos'
       res.appendChild(img)
    }
}