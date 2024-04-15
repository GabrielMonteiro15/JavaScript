function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var hora = new Date().getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = "/Aula12ex/fotos/ftmanha.jpg"
        document.body.style.background = '#D9CCC5'
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = "/Aula12ex/fotos/fttarde.jpg"
        document.body.style.background = '#F29E6D'
    }else{
        //Boa noite
        img.src = "/Aula12ex/fotos/ftnoite.jpg"
        document.body.style.background = '#0B0B0D'
    }    
}
