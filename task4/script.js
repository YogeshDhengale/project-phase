const cells = document.querySelectorAll('.cells')
const turn = document.querySelector('.turn')
const winnerDisplay=document.querySelector('.display')
const restart=document.getElementById('restart-btn')
let playesTurn = 'X'
let gameArr = new Array(9).fill(null)
let gameStatus = false

restart.addEventListener('click', ()=>{
    gameStatus=false;
    playesTurn='X';
    turn.innerHTML='Player X turn'
    winnerDisplay.innerHTML=''
    gameArr=new Array(9).fill(null);
    cells.forEach(cell => cell.innerHTML='')
})

function checkWin() {
    cells
    const winingChances = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    winingChances.forEach((e)=>{
        if((cells[e[0]].innerText===cells[e[1]].innerText) && (cells[e[2]].innerText===cells[e[1]].innerText) && (cells[e[0]].innerText!=='')){
            winnerDisplay.innerHTML=`${cells[e[0]].innerText} won`
            gameStatus=true
        }})
}


cells.forEach(cell => {
    cell.addEventListener('click', handleClick)
})

function handleClick(e) {
    const cellId = parseInt(e.target.value)

    if (gameArr[cellId] || gameStatus) return;
    gameArr[cellId] = playesTurn
    e.target.innerHTML = playesTurn

    if (gameStatus) return;
    playesTurn = playesTurn === 'X' ? 'O' : 'X'
    checkWin()
    if(!gameStatus){
        turn.innerHTML = `Player ${playesTurn} turn`
    } 
}