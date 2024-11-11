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

        // pRow = 3; //used for testing
        // pCol = 3; // used for testing
        switch (direction) {
            case 'up':
                pRow = Math.max(0, pRow - 1);
                break;
            case 'down':
                pRow = Math.min(this.size-1, pRow + 1);
                break;
            case 'left':
                pCol = Math.max(0, pCol - 1);
                break;
            case 'right':
                pCol = Math.min(this.size-1, pCol + 1);
                break;
        }
        // alert(`Inside move direction: new row--${pRow} new col--${pCol}`)
        if(this.board[pRow][pCol] !== "O"){
             this.board[this.playerPos.row][this.playerPos.col] = ``; //updates the players current position to be empty
             this.playerPos.row = pRow;
             this.playerPos.col = pCol;
             this.moves++;
             if(this.board[pRow][pCol] === "P"){
                 this.score++;
                 this.board[pRow][pCol] = '';
                 //this is collectable **this.collectables.push({row: row, col:col}) **
                 this.collectables = this.collectables.filter( collectable =>   //filters out from the original collectable array
                     !(collectable.row === pRow && collectable.col === pCol)    //the current collectible position and sets collectibles

                 );
                 this.showNotification("collected and item")
             }
             this.board[this.playerPos.row][this.playerPos.col] = "P";
             this.render(); // shows the updated board
        }
    },
    showNotification(msg){
        const notification = document.getElementById("notification");
        notification.innerHTML = msg;
        setTimeout(()=>{
            notification.innerText = '';
        }, 3000);
    },

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

