var TennisGame1 = function() {
    this.m_score1 = 0;
    this.m_score2 = 0;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    this[`m_score${playerName.slice(-1)}`] += 1;
};

TennisGame1.prototype.getScore = function() {
    var score = (this.m_score1 === this.m_score2) ? 'deuce' : ( (this.m_score1 >= 4 || this.m_score2 >= 4) ? 'getAdvantage' : 'getCurrentScore' );
    return this[score]();
};

TennisGame1.prototype.deuce = function(){
    var score = (this.m_score1 < 3) ? this.m_score1 : 3;
    var scoreNames = ['Love-All', 'Fifteen-All', 'Thirty-All', 'Deuce'];
    return scoreNames[score];
}

TennisGame1.prototype.getAdvantage = function() {
    var playerWithAdvantage = (this.m_score1>this.m_score2)?1:2;
    var minusResult = Math.abs(this.m_score1 - this.m_score2);
    return ((minusResult === 1) ? "Advantage player" : "Win for player" ) + playerWithAdvantage;
}

TennisGame1.prototype.getCurrentScore = function() {
    var tempScore = 0;
    var scoreNames = ['Love', 'Fifteen', 'Thirty', 'Forty'];
    return scoreNames[this.m_score1] + '-' + scoreNames[this.m_score2];
}

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}