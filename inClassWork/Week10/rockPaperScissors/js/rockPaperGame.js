const ui = {

}
const game = {
    rules : [
        {id : 0, item: 'rock', img : "rock.webp", beats : 'scissors'},
        {id : 1, item: 'paper', img : "paper.webp", beats : 'rock'},
        {id : 2, item: 'scissors', img : "scissors.webp", beats : 'paper'},
    ],
    state : {
        wins : 0,
        loses : 0,
        draws : 0
    },
    messages : {
        win : "winner",
        loss : "loser",
        draw : "draw"
    },
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    evaluateResults: function (cPickObj, uPickObj){
        if(uPickObj.beats === cPickObj.item){
            this.state.wins++;
            return this.messages.win;
        } else if(cPickObj.beats === uPickObj.item){
            this.state.loses++;
            return this.messages.loss;
        }
        else {
            this.state.draws++;
            return this.messages.draw;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("mainButton").addEventListener("click",
        () => {
            const cPick = game.getRandomInt(0, 2);
            const cObj = game.rules[cPick]; // returns row of cPick

            const uPickIndex = document.getElementById("sel1").value;
            const uObj = game.rules[uPickIndex];

            const resultMsg = game.evaluateResults(cObj, uObj);
            console.log("computer --->", cObj.item);
            console.log("user --->", uObj.item);
            console.log('resut: '+ resultMsg);
        })

})
