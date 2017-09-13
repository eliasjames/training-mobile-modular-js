var ticTacToe = {
  binds: {},
  games: {},
  newGame() {
    this.game.latestId = new Date().valueOf();
    this.games[ this.game.latestId ] = new ticTacToe.game();
    this.binds[ this.game.latestId ] = new this.bind( this.game.latestId );
    this.binds[ this.game.latestId ].initGameUi();
    this.games[ this.game.latestId ].startGame();
    return this.game.latestId;
  }
};

$( document ).ready( ()=>{
  ticTacToe.newGame();
});

