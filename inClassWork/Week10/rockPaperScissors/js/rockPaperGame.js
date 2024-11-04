const ui = {
    displayImage: function(pickObj, disId) {
        const imgHtml = `<img src='imgs/${pickObj.img}' width='100px' alt="${pickObj.item}"'>`;
        document.getElementById(disId).innerHTML = imgHtml;
    },
    updateDisplayValue: function(value, disId) {
        document.getElementById(disId).innerText = value;
    },
    updateResultValue: function(value, disId) {

    },
    updateStatsDisplay: function(state) {
        this.updateDisplayValue(state.wins, "wins");
        this.updateDisplayValue(state.losses, "loss");
        this.updateDisplayValue(state.draws, "draws");
    }
};

const game = {
    rules: [
        { id: 0, item: 'rock', beats: 'scissors', img: 'rock.PNG' },
        { id: 1, item: 'paper', beats: 'rock', img: 'paper.PNG' },
        { id: 2, item: 'scissors', beats: 'paper', img: 'scissors.PNG' }
    ],
    state: {
        wins: 0,
        losses: 0,
        draws: 0
    },
    messages: {
        win: "Winner!",
        loss: "Loser!",
        draw: "Draw!",
    },
    getRandomInt: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    evaluateResult: function(cPickObj, uPickObj) {
        if (uPickObj.beats === cPickObj.item) {
            this.state.wins++;
            return this.messages.win;
        } else if (cPickObj.beats === uPickObj.item) {
            this.state.losses++;
            return this.messages.loss;
        } else {
            this.state.draws++;
            return this.messages.draw;
        }
    }
};

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mainButton").addEventListener("click", function() {
        const cPickIndex = game.getRandomInt(0, 2);
        const cPickObj = game.rules[cPickIndex];
        ui.displayImage(cPickObj, "cPick");

        const uPickIndex = parseInt(document.getElementById("sel1").value);
        const uPickObj = game.rules[uPickIndex];
        ui.displayImage(uPickObj, "uPick");

        const resultMessage = game.evaluateResult(cPickObj, uPickObj);
        ui.updateDisplayValue(resultMessage, "resArea");
        ui.updateStatsDisplay(game.state); // Call to update all stats
    });
});