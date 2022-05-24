var espacos = Array.from(document.querySelectorAll(".espaco"))
espacos.forEach(espaco => espaco.addEventListener("click", Jogada));
var marcas = ['', '', '', '', '', '', '', '', '', '']

var e = 0
var jAtual = document.querySelector("#Display")
var vit = document.querySelector("#Vitoria")
var jogador = "X"
jAtual.innerHTML =`<span id="Primeiro"> Vez de X </span>`

const botaoS = document.querySelector("input#sim")
const botaoN = document.querySelector("input#nao")

botaoS.addEventListener("click", resetar)
botaoN.addEventListener("click", parar)


function Jogada () {

    switch (jogador){

        case "X":
            //marca "x" no espaco clicado
            this.classList.add("X")

            console.log(espacos.indexOf(this))

            //adiciona um x no array marcas[] na mesma posição do array espacos[] que foi clicado 
            marcas[espacos.indexOf(this)] = "X"
            //guarda as posições de onde existe "O" no array Marcas[]
            var mx = marcas.map((i,id) => i==="X"?id: null )

            console.log(mx)
            console.log(marcas)
            //não permite q o mesmo espaço seja clicado mais de uma vez
            this.removeEventListener("click",Jogada)
            
            //verifica a cada jogada se houve um vencedor
            check()

            //altera o jogador
            jogador = "O"
            jAtual.innerHTML = `<span id="Segundo"> Vez do O </span>` 

        break


        case "O":
            //marca o "O" no espaco clicado
            this.classList.add("O")

            //adiciona um O no array marcas[] na mesma posição do array espacos[] que foi clicado 
            marcas[espacos.indexOf(this)] = "O"
            //guarda as posições de onde existe "O" no array Marcas[]
            var mo = marcas.map((i,id) => i==="O"?id: null )

            console.log(mo)
            console.log(marcas)

            //não permite q o mesmo espaço seja clicado mais de uma vez
            this.removeEventListener("click",Jogada)
            
            //verifica a cada jogada se houve um vencedor
            check()

            //altera o jogador
            jogador = "X"
            jAtual.innerHTML =`<span id="Primeiro"> Vez do X </span>`
            break
    }

}
function check(){

    var mx = marcas.map((i,id) => i==="X"?id: null )
    var mo = marcas.map((i,id) => i==="O"?id: null )

        
    win = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]]

    //vai percorrer todos os arrays da variável win e criar uma nova array 
    //deixando de fora(filtrando) todos os valores que não estão na variável mx   
    var X = win.map(w => w.filter(item => mx.includes(item)))
    console.log(X)
    var O = win.map(w => w.filter(item => mo.includes(item)))
    console.log(O)

    console.log(X.filter(V => V.length === 3))

    //caso o tamanho de alguma array da nova varável for  igual a 3 significa que houve um vencedor
    if (X.filter(V => V.length === 3).length || O.filter(V => V.length === 3).length ){
        console.log(`${jogador} ganhou`)
        mx.map(x => x = "")
        mo.map(o => o = "")
        e = 0
        Vitoria()
        
    //caso o tamanho continue abaixo de 3 por 9 rodadas significa que houve um empate
    }else if(X.filter(V => V.length < 3)){
        e++

        if(e == 9){
            console.log("empate")
            Empate()
           
        }
    }
}
            
//mostra a tela de vitória e anuncia o vencedor
function Vitoria() {
    jAtual.innerHTML =`<span id="Fim"> Fim de jogo </span>`

    espacos.forEach(espaco => espaco.removeEventListener("click", Jogada));
    vit.style.visibility = "visible"
    vit.firstElementChild.innerHTML = `${jogador} ganhou`         
}
//mostra a tela anunciando um empate
function Empate(){ 
    jAtual.innerHTML =`<span id="Fim"> Fim de jogo </span>`

    vit.style.visibility = "visible"
    vit.firstElementChild.innerHTML = "Empate" 
}
//reseta as variáveis para que uma nova partida seja jogada
function resetar(){
    marcas = ['', '', '', '', '', '', '', '', '', '']
    
    espacos.map(m => m.classList.remove("X"))
    espacos.map(m => m.classList.remove("O"))
    vit.style.visibility = "hidden"
    espacos.forEach(espaco => espaco.addEventListener("click", Jogada));
}
//esconde a janela de reultados e destiva o tabuleiro
function parar(){
    jAtual.innerHTML =`<span id="Fim"> Fim de jogo </span>`

    deNovo = false
    vit.style.visibility = "hidden"
    espacos.forEach(espaco => espaco.removeEventListener("click", Jogada));
}

