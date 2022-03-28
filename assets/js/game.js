function Jogo(){
    this.valor = 6
    
    this.time = () => {
        this.pauseTime = setTimeout(() => {      
            clearInterval(this.pauseInterval)
            this.temporizador.innerHTML = '<h2> 0 </h2>'             
            this.valor = 8            
            this.resultado()    
        }, 7000)
    }

    this.interval = () => {
        this.pauseInterval = setInterval(() => {
            this.temporizador.innerHTML = '<h2>' + this.valor +'</h2>'
            this.valor--
        }, 1000)
    } 
        

    this.temporizador = document.querySelector('.temporizador')

    this.jogar = () => {
        let mensagens = document.querySelector('#mensagens')
        mensagens.style.display = 'none'    
        let aviso = document.querySelector('.aviso')
        aviso.classList.add('displayNone')

        moviment = 2
    
        this.interval()
        this.time()
    }

    this.resultado = () => {
        let pontoHTML = document.querySelector('.pontoHTML')
        let endgame = document.querySelector('.endgame')
        let mensagens = document.querySelector('#mensagens')

        this.valor = 6
        
        if(playerY === targetY - 30 && playerX === targetX){
            ponto += 1
            randomPositionTarget()
            this.temporizador.innerHTML = '<h2> 7 </h2>'            
            this.interval()
            this.time()
        }else{
            endgame.classList.remove('displayNone')
            mensagens.style.display = 'flex'
            let pontuacaoFinal = document.querySelector('.pontuacao')
            pontuacaoFinal.innerText = ponto + ' pontos'
            
            if(playerUpBoolean){
                clearInterval(stopUp)
            }
            if(playerDownBoolean){
                clearInterval(stopDown)
            }
            if(playerRightBoolean){
                clearInterval(stopRight)
            }
            if(playerLeftBoolean){
                clearInterval(stopLeft)
            } 

            moviment = 3
        }

        pontoHTML.innerText = 'Pontos: ' + ponto
    }

    this.recomecar = () => {
        let endgame = document.querySelector('.endgame')
        endgame.classList.add('displayNone')
        let aviso = document.querySelector('.aviso')
        aviso.classList.remove('displayNone')

        moviment = 1
        ponto = 0

        playerX = 30  
        playerY = 180   

        positionPlayer()
        randomPositionTarget()

        this.temporizador.innerHTML = '<h2> 7 </h2>'
        this.valor = 6

        let pontoHTML = document.querySelector('.pontoHTML')
        pontoHTML.innerText = 'Pontos: 0'

    }
}

const game = new Jogo()

document.querySelector('.btnReiniciar').addEventListener('click', () => game.recomecar())
document.querySelector('.btnJogar').addEventListener('click', () => game.jogar())