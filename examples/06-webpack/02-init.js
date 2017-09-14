(function () {
  var ticTacToe = {
    binds: {},
    games: {},
    newGame() {
      this.gameId = new Date().valueOf();
      this.games[ this.gameId ] = new ticTacToe.Game( this.gameId );
      this.binds[ this.gameId ] = new this.Bind( this );
      this.binds[ this.gameId ].initGameUi();
      this.games[ this.gameId ].startGame();
      return this.Game.latestId;
    }
  };
  document.addEventListener( 'startNewGame', ()=>{
    ticTacToe.newGame(); 
  });
  require( [ './02-ticTacToe.js' ], ( Game )=>{
    ticTacToe.Game = Game;
    require( [ './02-bind.js' ], ( Bind )=>{
      ticTacToe.Bind = Bind;
			require( [ 'jQuery' ], ( $ )=>{
				$( document ).ready( ()=>{
					ticTacToe.newGame();
				});
      });
    });
  });
  let controls = require( './02-controls.js' );
	controls();
})();
