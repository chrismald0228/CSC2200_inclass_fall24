const gameBoard = {
    size: 4,
    board: [],
    moves: 0,
    score: 0,
    icons: {
        player: `<i class="fa-solid fa-chess-knight player-icon"></i>`,
        obstacle: `<i class="fa-solid fa-dungeon obstacle-icon"></i>`,
        collectable: `<i class="fa-solid fa-ring collectible-icon"></i>`,
    },
    playerPos: {row: 0, col: 0},
    odds: {
        chanceOfBlock: .2,
        chanceOfCollect: .3,
    },
    obstacles: [],
    collectables: [],
    init(){
        this.createEmptyBoard();
        this.setUpBoard();
        this.render();
    },
    createEmptyBoard(){
        for(let i=0; i<this.size;i++){
            let row = Array(this.size).fill('');
            this.board.push(row);  //appends a row to the array
        }
    },
    setUpBoard(){
        for(let row=0;row<this.size;row++){
            for(let col=0;col<this.size;col++){
                if(Math.random() < this.odds.chanceOfBlock){
                    this.board[row][col] = `O`;
                    this.obstacles.push({row: row, col:col});
                } else  if(Math.random() < this.odds.chanceOfCollect){
                    this.board[row][col] = `C`;
                    this.collectables.push({row: row, col:col});
                }
            }
        }
        this.board[this.playerPos.row][this.playerPos.col] = "P";
    },
    render() {
        const gameBoardDOM = document.getElementById("game-board");
        gameBoardDOM.innerHTML = ''; //clear out board
        for(let row=0; row<this.size; row++){
            for(let col=0;col<this.size; col++){
                const tile = document.createElement('div');
                tile.className = "tile"; // <div class = 'tile> ; allows for the css to style each tile
                if(this.board[row][col] === "P"){
                    tile.innerHTML = this.icons.player;
                } else if(this.board[row][col] === 'O'){
                    tile.innerHTML = this.icons.obstacle;
                } else if (this.board[row][col] === 'C'){
                    tile.innerHTML = this.icons.collectable;
                }
                gameBoardDOM.appendChild(tile);
            }
        }
        document.getElementById("move-count").textContent = `Moves: ${this.moves}`;
    },
    move(direction){
        // alert('inside move direction: ' + direction);
        let pRow = this.playerPos.row;
        let pCol = this.playerPos.col;
        switch (direction) {
            case 'up':
                alert('update up');
                break;
            case 'down':
                alert('update down');
                break;
            case 'left':
                alert('update left');
                break;
            case 'right':
                break;
        }
    }
}


document.addEventListener("DOMContentLoaded", function() {
    gameBoard.init();
    window.addEventListener("keydown", (e) => {
        // alert("key down: "+ e.key)   //
        switch(e.key){
            case "w":
                gameBoard.move('up');
                break;
            case 'a':
                gameBoard.move('left');
                break;
            case 's':
                gameBoard.move('down');
                break;
            case 'd':
                gameBoard.move('right');
                break;
        }
    })
})

