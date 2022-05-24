var espacos = document.querySelectorAll(".espaco")
espacos.forEach(espaco => espaco.addEventListener("click", Jogada));

var jogou = false
var matriz =[]


function Jogada () {
    
    if (jogou == false ) {
        this.classList.add("X")

        jogou = true
        this.removeEventListener("click",Jogada)
        
        matriz[this.id] = "X"
         
        console.log (matriz)

        check()
    }
    else {
        this.classList.add("O")
        jogou = false
        this.removeEventListener("click",Jogada)
        matriz[this.id] = "O"

        check()
    }
}

  function check(){
     
 if(matriz.e1 == "X" && matriz.e2 == "X" && matriz.e3 == "X" ||
    matriz.e4 == "X" && matriz.e5 == "X" && matriz.e6 == "X" ||
    matriz.e7 == "X" && matriz.e8 == "X" && matriz.e9 == "X" ||
    matriz.e1 == "X" && matriz.e4 == "X" && matriz.e7 == "X" ||
    matriz.e2 == "X" && matriz.e5 == "X" && matriz.e8 == "X" ||
    matriz.e3 == "X" && matriz.e6 == "X" && matriz.e9 == "X" ||
    matriz.e1 == "X" && matriz.e5 == "X" && matriz.e9 == "X" ||
    matriz.e7 == "X" && matriz.e5 == "X" && matriz.e3 == "X" ){ 
     console.log("X ganhou")
  }else if(matriz.e1 == "O" && matriz.e2 == "O" && matriz.e3 == "O" ||
  matriz.e4 == "O" && matriz.e5 == "O" && matriz.e6 == "O" ||
  matriz.e7 == "O" && matriz.e8 == "O" && matriz.e9 == "O" ||
  matriz.e1 == "O" && matriz.e4 == "O" && matriz.e7 == "O" ||
  matriz.e2 == "O" && matriz.e5 == "O" && matriz.e8 == "O" ||
  matriz.e3 == "O" && matriz.e6 == "O" && matriz.e9 == "O" ||
  matriz.e1 == "O" && matriz.e5 == "O" && matriz.e9 == "O" ||
  matriz.e7 == "O" && matriz.e5 == "O" && matriz.e3 == "O" ){ 
   console.log("O ganhou")


}else {
    console.log("Velha")
}

  }