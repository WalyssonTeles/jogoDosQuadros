let playerUpBoolean = false
let playerDownBoolean = false
let playerRightBoolean = false
let playerLeftBoolean = false 

let moviment = 1


document.addEventListener('click', (event) => {
    event.preventDefault()

    e = event.target

    let playerSquare = document.querySelector('.playerSquare')

    let velocity = 150

    if(moviment === 2){
        if(e.classList.contains("ArrowRight") || e.classList.contains("ArrowLeft") || e.classList.contains("ArrowDown") || e.classList.contains("ArrowUp")){
            moviment = 4
            if(e.classList.contains("ArrowRight")){
                playerRightBoolean = true                  
                stopRight = setInterval(() =>{
                    if(impacto()){
                        playerX += 30
                    }
                    playerSquare.style.left = playerX + 'px'
                    acrescentaPonto()
                }, velocity)
            }

            if(e.classList.contains("ArrowLeft")){
                playerLeftBoolean = true                
                stopLeft = setInterval(() =>{
                    if(impacto()){
                        playerX -= 30
                    }
                    playerSquare.style.left = playerX + 'px'
                    acrescentaPonto()
                }, velocity)
            }

            if(e.classList.contains("ArrowUp")){
                playerUpBoolean = true                
                stopUp = setInterval(() =>{
                    if(impacto()){
                        playerY -= 30
                    }
                    playerSquare.style.top = playerY + 'px'
                    acrescentaPonto()
                }, velocity)
            }

            if(e.classList.contains("ArrowDown")){
                playerDownBoolean = true                
                stopDown = setInterval(() =>{
                    if(impacto()){
                        playerY += 30
                    }
                    playerSquare.style.top = playerY + 'px'
                    acrescentaPonto()
                }, velocity)
            }
        }
    }else if(moviment === 4) {
        if(e.classList.contains("ArrowRight")){
            if(playerUpBoolean){
                clearInterval(stopUp)
                playerUpBoolean = false
                playerRightBoolean = true
                stopRight = setInterval(() =>{
                    if(impacto()){
                        playerX += 30
                    }
                    playerSquare.style.left = playerX + 'px'
                    acrescentaPonto()
                }, velocity) 
            }
            if(playerDownBoolean){
                clearInterval(stopDown)
                playerDownBoolean = false
                playerRightBoolean = true
                stopRight = setInterval(() =>{
                    if(impacto()){
                        playerX += 30
                    }
                    playerSquare.style.left = playerX + 'px'
                    acrescentaPonto()
                }, velocity) 
            }
        }

        if(e.classList.contains("ArrowLeft")){
            if(playerUpBoolean){
                clearInterval(stopUp)
                playerUpBoolean = false
                playerLeftBoolean = true
                stopLeft = setInterval(() =>{
                    if(impacto()){
                        playerX -= 30
                    }
                    playerSquare.style.left = playerX + 'px'
                    acrescentaPonto()
                }, velocity) 
            }
            if(playerDownBoolean){
                clearInterval(stopDown)
                playerDownBoolean = false
                playerLeftBoolean = true
                stopLeft = setInterval(() =>{
                    if(impacto()){
                        playerX -= 30
                    }
                    playerSquare.style.left = playerX + 'px'
                    acrescentaPonto()
                }, velocity) 
            }
        }

        if(e.classList.contains("ArrowUp")){
            if(playerRightBoolean){
                clearInterval(stopRight)
                playerRightBoolean = false
                playerUpBoolean = true
                stopUp = setInterval(() =>{
                    if(impacto()){
                        playerY -= 30
                    }
                    playerSquare.style.top = playerY + 'px'
                    acrescentaPonto()
                }, velocity) 
            }
            if(playerLeftBoolean){
                clearInterval(stopLeft)
                playerLeftBoolean = false
                playerUpBoolean = true
                stopUp = setInterval(() =>{
                    if(impacto()){
                        playerY -= 30
                    }
                    playerSquare.style.top = playerY + 'px'
                    acrescentaPonto()
                }, velocity)
            }

        }

        if(e.classList.contains("ArrowDown")){
            if(playerRightBoolean){
                clearInterval(stopRight)
                playerRightBoolean = false
                playerDownBoolean = true
                stopDown = setInterval(() =>{
                    if(impacto()){
                        playerY += 30
                    }
                    playerSquare.style.top = playerY + 'px'
                    acrescentaPonto()
                }, velocity) 
            }
            if(playerLeftBoolean){
                clearInterval(stopLeft)
                playerLeftBoolean = false
                playerDownBoolean = true
                stopDown = setInterval(() =>{
                    if(impacto()){
                        playerY += 30
                    }
                    playerSquare.style.top = playerY + 'px'
                    acrescentaPonto()
                }, velocity)
            }
        }
    }
    
    function impacto(){
        if(playerY === alturaTela - 30){
            clearInterval(stopDown)
            pauseTime()
            game.resultado()
            return false
        }
        if(playerY === -60){
            clearInterval(stopUp)
            pauseTime()
            game.resultado()
            return false
        }
        if(playerX === -30){
            clearInterval(stopLeft)
            pauseTime()
            game.resultado()
            return false
        }
        if(playerX === larguraTela){
            clearInterval(stopRight)
            pauseTime()
            game.resultado()
            return false
        }


        return true
    }

    function acrescentaPonto(){
        if(playerY === targetY - 30 && playerX === targetX){
            pauseTime()
            game.temporizador.innerHTML = '<h2> 7 </h2>'             
            game.valor = 6            
            game.resultado()
        }
    }

    function pauseTime(){
        clearTimeout(game.pauseTime)
        clearInterval(game.pauseInterval)
    }
})
