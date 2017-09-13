ticTacToe.bind = function( gameId ) {
  return {
    bindCurrentPlayer() {
      $( document ).on( GLOBAL_CONFIG.ui.events.changePlayer, function( e ) {
        $( '.' + GLOBAL_CONFIG.ui.els.currentPlayer ).html( 'Current player: ' + e.detail );
      });
    },
    bindGameUI() {
      $( 'input' ).on( 'click', function( e ) {
          var clickTarget = e.target;
          ticTacToe.games[ gameId ].acceptInput( clickTarget.name );
      });
    },
    buildGameUI( gameBoardID ) {
      let gameEl = $( '<div>' ),
        multiGameEl = $( '<h2>' ),
        multiGameNumber,
        currentPlayerEl = $( '<h3>' ),
        tableEl = $( '<table>' );

      gameEl.addClass( GLOBAL_CONFIG.ui.els.boardClass );
      multiGameNumber = GLOBAL_CONFIG.game.getMultiGameId();
      multiGameEl.addClass( GLOBAL_CONFIG.ui.els.multiGame );
      multiGameEl.html( 'Game ' + multiGameNumber );
      gameEl.append( multiGameEl );

      currentPlayerEl.addClass( GLOBAL_CONFIG.ui.els.currentPlayer );
      gameEl.append( currentPlayerEl );

      for ( let row = 0; row < 3; row++ ) {
        let tableRowEl = $( '<tr>' );

        for ( let column = 0; column < 3; column++ ) {
          let tableDataEl = $( '<td>' );

          for ( let player = 0; player < 2; player++ ) {
            let currentPlayer = GLOBAL_CONFIG.game.playerAttributesObj[ player ];
            let inputElTemplate = `
              <label>
                ${ currentPlayer.letter.toUpperCase() }
                <input type="radio" name="${ row }-${ column }" value="player${ currentPlayer.number }">
              </label>
            `;
            tableDataEl.append( inputElTemplate );
            tableRowEl.append( tableDataEl );
          }
        }
        tableEl.append( tableRowEl );
      }
      gameEl.append( tableEl );
      $( '#' + gameBoardID ).append( gameEl );
    },
    initGameUi( gameId ) {
      this.buildGameUI( GLOBAL_CONFIG.ui.els.gameLocation, gameId );
      this.bindGameUI();
      this.bindCurrentPlayer();
    }
  }
};
