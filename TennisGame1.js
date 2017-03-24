var TennisGame1 = function(player1Name, player2Name) {
    this.player1Score = 0;
    this.player2Score = 0;
    this.score = '';
    this.PLAYERONE = "player1";
    this.PLAYERTWO = "player2";
    this.LOVEALL = 'Love-All';
    this.FIFTEENALL = 'Fifteen-All';
    this.THIRTYALL = 'Thirty-All';
    this.DEUCE = 'Deuce';
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === this.PLAYERONE)
        this.player1Score += 1;
    if (playerName === this.PLAYERTWO)
        this.player2Score += 1;
};

TennisGame1.prototype.getScore = function() {

    if (this.player1Score === this.player2Score) {
        this.score = this.equalScore();
    } else if (this.player1Score >= 4 || this.player2Score >= 4) {
        this.deuceOrWinGameScore();
    } else {
        this.score = this.getPlayerScore(this.player1Score) + '-' + this.getPlayerScore(this.player2Score);
    }
    return this.score;
};

TennisGame1.prototype.equalScore = function () {
    var score = '';
    switch (this.player1Score) {
        case 0:
            score = this.LOVEALL;
            break;
        case 1:
            score = this.FIFTEENALL;
            break;
        case 2:
            score = this.THIRTYALL;
            break;
        default:
            score = this.DEUCE;
            break;
    }
    return score;
}

TennisGame1.prototype.deuceOrWinGameScore = function () {
    var minusResult = this.player1Score - this.player2Score;
    if (minusResult === 1) this.score = "Advantage player1";
    else if (minusResult === -1) this.score = "Advantage player2";
    else if (minusResult >= 2) this.score = "Win for player1";
    else this.score = "Win for player2";
}

TennisGame1.prototype.getPlayerScore = function (score) {
    switch (score) {
        case 0:
            score = "Love";
            break;
        case 1:
            score = "Fifteen";
            break;
        case 2:
            score = "Thirty";
            break;
        case 3:
            score = "Forty";
            break;
    }
     return score;
}

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}