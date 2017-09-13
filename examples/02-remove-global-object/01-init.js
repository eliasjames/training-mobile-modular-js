(function() { 
  let ticTacToe,
    evtMakeGameEngine;

  ticTacToe = {
    binds: {},
    games: {},
    init() {
      document.addEventListener( 'gameReady', (e)=>{
        this.game = e.detail.game;
        let bindGameUiToEngine = new Event( 'bindGameUiToEngine' );
        document.dispatchEvent( bindGameUiToEngine );
      });
      document.addEventListener( 'bindReady', (e)=>{
        this.bind = e.detail.bind;
      });

      let makeGameEngine = new CustomEvent( 'makeGameEngine', {
        detail: this
      });
      document.dispatchEvent( makeGameEngine );

      document.addEventListener( 'startNewGame', (e)=>{
        this.newGame();
      });
    },
    newGame() {
      this.latestGameId = new Date().valueOf();
      this.games[ this.latestGameId ] = new this.game( this.latestGameId );
      this.binds[ this.latestGameId ] = new this.bind( this.latestGameId );
      this.games[ this.latestGameId ].startGame();
      return this.game.latestId;
    }
  };

  $( document ).ready( ()=>{
    ticTacToe.init();
    document.dispatchEvent( new Event( 'startNewGame' ));
  });
})();
