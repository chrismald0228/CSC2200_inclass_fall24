const gameBoard = {
    size: 4,
    board: [],
    icons: {
        player: `<i class="fa-solid fa-chess-knight"></i>`,
        obstacle: `<i class="fa-solid fa-dungeon"></i>`,
        collectable: `<i class="fa-solid fa-ring"></i>`,
    },
    odds: {
        chanceOfBlock: .2,
        chanceOfCollect: .3,
    },
    obstacles: [],
    collectables: [],
    init(){
        alert("gmaae time");
        this.createEmptyBoard();
        this.setUpBoard();
    },
    createEmptyBoard(){
        for(let i=0; i<this.size;i++){
            const row = Array(this.size).fill('');
            this.board.push(row);
        }
    },
    setUpBoard(){
        for(let row=0;row<this.size;row++){
            for(let col=0;col<this.size;col++){
                if(Math.random() < this.odds.chanceOfBlock){
                    this.board[row][col] = `O`;
                    this.obstacles.push({row: row, col:col});
                } else if(Math.random() < this.odds.chanceOfCollect){
                    this.board[row][col] = `C`;
                    this.collectables.push({row: row, col:col});
                }
            }
        }
    }
}


document.addEventListener("DOMContentLoaded", function() {
    gameBoard.init();
    alert(`board: ${gameBoard.board.length}`);
})