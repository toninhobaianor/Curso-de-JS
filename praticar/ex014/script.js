function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = 'agora são ' + hora + ' horas'
    if (hora >= 0 && hora < 12){
        //BOM DIA
        foto.src = 'manhã.png'
        document.body.style.background = 'yellow'
    }else if (hora >= 12 && hora < 18){
        //BOA TARDE
        foto.src = 'tarde.png'
        document.body.style.background = 'orange'
    }else {
        //BOA NOITE
        foto.src = 'noite.png'
        document.body.style.background = 'dark blue'
    }
}