playerUpBoolean = false
playerDownBoolean = false
playerRightBoolean = false
playerLeftBoolean = false 

moviment = 1

document.addEventListener('keyup', (e) => {
    e.preventDefault()

    let playerSquare = document.querySelector('.playerSquare')

    let velocity = 90

    if(moviment === 1){
        if(e.key === 'ArrowRight' || e.key === 'd' || e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'ArrowDown' || e.key === 's' || e.key === 'ArrowUp' || e.key === 'w'){
            game.jogar()
            
            if(e.key === 'ArrowRight' || e.key === 'd'){
                playerRightBoolean = true                  
                stopRight = setInterval(() =>{
                    if(impacto()){
                        playerX += 30
                    }
                    playerSquare.style.left = playerX + 'px'
                    acrescentaPonto()
                }, velocity)
            }

            if(e.key === 'ArrowLeft' || e.key === 'a'){
                playerLeftBoolean = true                
                stopLeft = setInterval(() =>{
                    if(impacto()){
                        playerX -= 30
                    }
                    playerSquare.style.left = playerX + 'px'
                    acrescentaPonto()
                }, velocity)
            }

            if(e.key === 'ArrowUp' || e.key === 'w'){
                playerUpBoolean = true                
                stopUp = setInterval(() =>{
                    if(impacto()){
                        playerY -= 30
                    }
                    playerSquare.style.top = playerY + 'px'
                    acrescentaPonto()
                }, velocity)
            }

            if(e.key === 'ArrowDown' || e.key === 's'){
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
    }else if(moviment === 2) {
        if(e.key === 'ArrowRight' || e.key === 'd'){
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

        if(e.key === 'ArrowLeft' || e.key === 'a'){
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

        if(e.key === 'ArrowUp' || e.key === 'w'){
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

        if(e.key === 'ArrowDown' || e.key === 's'){
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

    if(e.key === 'Enter'){
        console.log('- - - - -')
        console.log('Jogador= X: ' + playerX + ', Y: ' + playerY)
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