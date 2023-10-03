"use strict"

const btn = window.document.getElementById("btn")
const notas = [...window.document.querySelectorAll(".nota")]
const valor_inserir = window.document.getElementById("valor-inserir")
const nota_final = window.document.querySelector(".nota-final")
const nota_user = window.document.querySelector(".nota-user")

const clicado = []

for(let i = 0; i < notas.length; i++){


       notas[i].addEventListener("click", (evt)=>{


            if(notas[i] == notas[0]){


                notas[0].style.background = "hsl(25, 97%, 53%) "
                notas[0].style.color = "white "
                


                notas[1].style.background = "hsla(217, 12%, 63%, 0.11) "
                notas[1].style.color = "hsla(217, 12%, 63%, 0.37"

                notas[2].style.background = "hsla(217, 12%, 63%, 0.11) "
                notas[2].style.color = "hsla(217, 12%, 63%, 0.37"

                notas[3].style.background = "hsla(217, 12%, 63%, 0.11) "
                notas[3].style.color = "hsla(217, 12%, 63%, 0.37"

                notas[4].style.background = "hsla(217, 12%, 63%, 0.11) "
                notas[4].style.color = "hsla(217, 12%, 63%, 0.37"

                clicado.unshift(notas[0])
                
                
                
            } else if(notas[i] == notas[1]){
    
                notas[1].style.background = "hsl(25, 97%, 53%) "
                notas[1].style.color = "white "

                notas[0].style.background = "hsla(217, 12%, 63%, 0.11) "
                notas[0].style.color = "hsla(217, 12%, 63%, 0.37"

                notas[2].style.background = "hsla(217, 12%, 63%, 0.11) "
                notas[2].style.color = "hsla(217, 12%, 63%, 0.37"

                notas[3].style.background = "hsla(217, 12%, 63%, 0.11) "
                notas[3].style.color = "hsla(217, 12%, 63%, 0.37"

                notas[4].style.background = "hsla(217, 12%, 63%, 0.11) "
                notas[4].style.color = "hsla(217, 12%, 63%, 0.37"





                clicado.unshift(notas[1])

               
    
            } else if(notas[i] == notas[2]){
    
                notas[2].style.background = "hsl(25, 97%, 53%) "
                notas[2].style.color = "white "

                notas[0].style.background = "hsla(217, 12%, 63%, 0.11) "
                notas[0].style.color = "hsla(217, 12%, 63%, 0.37"

                notas[1].style.background = "hsla(217, 12%, 63%, 0.11) "
                notas[1].style.color = "hsla(217, 12%, 63%, 0.37"

                notas[3].style.background = "hsla(217, 12%, 63%, 0.11) "
                notas[3].style.color = "hsla(217, 12%, 63%, 0.37"

                notas[4].style.background = "hsla(217, 12%, 63%, 0.11) "
                notas[4].style.color = "hsla(217, 12%, 63%, 0.37"
                clicado.unshift(notas[2])
    
            } else if(notas[i] == notas[3]){
    
                notas[3].style.background = "hsl(25, 97%, 53%) "
                notas[3].style.color = "white "

                notas[1].style.background = "hsla(217, 12%, 63%, 0.11) "
                notas[1].style.color = "hsla(217, 12%, 63%, 0.37"

                notas[2].style.background = "hsla(217, 12%, 63%, 0.11) "
                notas[2].style.color = "hsla(217, 12%, 63%, 0.37"

                notas[0].style.background = "hsla(217, 12%, 63%, 0.11) "
                notas[0].style.color = "hsla(217, 12%, 63%, 0.37"

                notas[4].style.background = "hsla(217, 12%, 63%, 0.11) "
                notas[4].style.color = "hsla(217, 12%, 63%, 0.37"

                clicado.unshift(notas[3])
    
            } else{
    
                notas[4].style.background = "hsl(25, 97%, 53%)"
                notas[4].style.color = "white "

                notas[1].style.background = "hsla(217, 12%, 63%, 0.11) "
                notas[1].style.color = "hsla(217, 12%, 63%, 0.37"

                notas[2].style.background = "hsla(217, 12%, 63%, 0.11) "
                notas[2].style.color = "hsla(217, 12%, 63%, 0.37"

                notas[3].style.background = "hsla(217, 12%, 63%, 0.11) "
                notas[3].style.color = "hsla(217, 12%, 63%, 0.37"

                notas[0].style.background = "hsla(217, 12%, 63%, 0.11) "
                notas[0].style.color = "hsla(217, 12%, 63%, 0.37"
                clicado.unshift(notas[4])
            }

            console.log(clicado)

        })


  
}



btn.addEventListener("click", ()=>{
    if(clicado[0] === undefined){

        window.alert("Você precisa votar")

    }
    nota_user.style.display = "none"
    nota_final.style.display = "block"
    valor_inserir.innerHTML = `You selected ${clicado[0].textContent} out of 5`


})
