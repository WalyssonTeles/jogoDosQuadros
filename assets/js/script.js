let gameDisplay = document.getElementById('fieldGame')
let larguraTela = gameDisplay.clientWidth
let alturaTela = gameDisplay.clientHeight

let playerX = 30  
let playerY = 30 
let targetX = 120    
let targetY = 120

let ponto = 0


function positionPlayer(){
    let playerSquare = document.querySelector('.playerSquare')
    playerSquare.style.top = playerY + 'px'
    playerSquare.style.left = playerX + 'px'
}

function randomPositionTarget(){    
    let targetSquare = document.querySelector('.targetSquare')

    targetX = larguraTela * 2
    targetY = alturaTela * 2

    while(targetX >= larguraTela || targetY >= alturaTela){
        let randomCalcX = () => (parseInt((Math.random() * 10)) * 30) * parseInt((Math.random() * 10) + 1)
        let randomCalcY = () => (parseInt((Math.random() * 10)) * 30) * parseInt((Math.random() * 10) + 1)
        
        targetX = randomCalcX()
        targetY = randomCalcY()
    }

    targetSquare.style.left = targetX + 'px'
    targetSquare.style.top = targetY + 'px'

    positionNow()
    console.log('Tela= X: ' + larguraTela + ', Y: ' + alturaTela)

}

randomPositionTarget()
positionPlayer()

function positionNow(){
    console.log('Jogador= X: ' + playerX + ', Y: ' + playerY)
    console.log('Alvo= X: ' + targetX + ', Y: ' + targetY)
}






