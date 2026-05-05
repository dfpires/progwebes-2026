function verificarMedalha(){
    let posicao = Number(document.getElementById("posicao").value)
    // checar o conteúdo da variável posicao
    let mensagem = document.getElementById("resultadoMedalha")
    switch(posicao){
        case 1: mensagem.innerText = "Medalha de ouro"
                mensagem.style.color = "gold"
                break // não entra nos cases abaixo
        case 2: mensagem.innerText = "Medalha de prata"
                mensagem.style.color = "silver"
                break
        case 3: mensagem.innerText = "Medalha de bronze"
                mensagem.style.color = "brown"
                break
        default: mensagem.innerText = "Posição sem medalha definida"
    }
    // coloca a mensagem para o usuário

}