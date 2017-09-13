(function() {
  document.addEventListener( 'bindGameUiToEngine', (e)=>{
    bindGameUi();
  });

  function bindGameUi() {
    let bindObj = {};

    bindObj.bind = function createBind( gameId ) {
      let returnObj = {
        bindCurrentPlayer() {
          var changePlayerTarget = `.${ GLOBAL_CONFIG.ui.els.currentPlayer }[data-game-id="${ this.gameId }`;
          document.addEventListener( GLOBAL_CONFIG.ui.events.changePlayer, ( e )=>{
            if ( e.detail.gameId === this.gameId ) {
              $( changePlayerTarget ).html( 'Current player: ' + e.detail.name );
            }
          });
        },
        bindGameUI() {
          $( 'input[data-game-id="' + this.gameId + '"]' ).on( 'click', ( e )=>{
              let clickTarget = e.target,
                targetName = clickTarget.name.substring( 
                  clickTarget.name.length - 3
                ), 
                evtAcceptInput;

              evtAcceptInput = new CustomEvent( 'acceptInput', { 
                detail: {
                  gameId: this.gameId,
                  target: targetName
                }
              });
              document.dispatchEvent( evtAcceptInput );
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
          currentPlayerEl.attr( 'data-game-id', this.gameId );
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
                    <input 
                      data-game-id="${ this.gameId }"
                      name="${ this.gameId }-${ row }-${ column }" 
                      type="radio" 
                      value="player${ currentPlayer.number }">
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
        gameId: gameId,
        initGameUi() {
          this.buildGameUI( GLOBAL_CONFIG.ui.els.gameLocation, this.latestGameId );
          this.bindGameUI();
          this.bindCurrentPlayer();
        }
      };
      returnObj.initGameUi();
      return returnObj;
    };

    evtBindReady = new CustomEvent( 'bindReady', { 
      detail: bindObj 
    });
    document.dispatchEvent( evtBindReady );
  }
})();
