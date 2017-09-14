define( [ './01-config' ], function( GLOBAL_CONFIG ) {
  return function makeGameEngine( gameId ) {
    let currentPlayer,
      moveStorage = [];

    return {
      acceptInput( moveCoords ) {
        // basic input check
        if ( !moveCoords || moveCoords.length != 3 || typeof this.convertCoordsToArray( moveCoords ) !== 'number' ) {
          throw GLOBAL_CONFIG.game.movePromptObj[ 'badinput' ];  
        }
        this.gameCycle( this.convertCoordsToArray( moveCoords ));
      },
      checkWin() {
        var winConditions = [
          [ 0, 1, 2 ],
          [ 3, 4, 5 ],
          [ 6, 7, 8 ],
          [ 0, 3, 6 ],
          [ 1, 4, 7 ],
          [ 2, 5, 8 ],
          [ 0, 4, 8 ],
          [ 2, 4, 6 ]
        ], 
          win = false,
          result;

        for (var i=0; i < winConditions.length; i++ ) {
          result = '';
          winConditions[ i ].forEach( function( eachIndex ) {
            result += moveStorage[ eachIndex ];
            if ( result === 'xxx' || result === 'ooo' ) {
              win = true;
              // stop looping
              ( win ) ? i = winConditions.length : undefined; 
            }
          });
        }
        return win;
      },
      changePlayer() {
        this.getOrChangePlayer( true );
      },
      convertCoordsToArray( moveCoords ) {
        var splitCoords = moveCoords.split( '' );
        return parseInt( splitCoords[0] ) * 3 + parseInt ( splitCoords[2] );
      },
      getOrChangePlayer( change ) {
        if ( currentPlayer === undefined && !change ) { 
          this.getOrChangePlayer( true );
        }
        if ( change ) {
          currentPlayer = !currentPlayer;
          let changePlayerEvent = new CustomEvent( 'changePlayer', { 
            'detail': { 
              gameId: this.gameId,
              name: this.getCurrentPlayer().name 
            }
          });
          document.dispatchEvent( changePlayerEvent );
        }
        return currentPlayer;
      },
      getCurrentPlayer() {
        return ( this.getOrChangePlayer( false )) ? 
          GLOBAL_CONFIG.game.playerAttributesObj[0] :
          GLOBAL_CONFIG.game.playerAttributesObj[1];
      },
      promptInput( promptMessageKey ) {
        var player = this.getCurrentPlayer();
        var specificPrompt = promptMessageKey + player.name;
        var result = window.prompt( GLOBAL_CONFIG.game.movePromptObj[ specificPrompt ], '0x0');
        acceptInput( result );
      },
      storeInput( moveCoord ) {
        var player = this.getCurrentPlayer();
        moveStorage[ moveCoord ] = player.letter;
      },
      gameCycle( moveCoord ) {
        this.storeInput( moveCoord );

        if ( !this.checkWin() ) {
          this.changePlayer();
          if ( GLOBAL_CONFIG.game.cliMode ) {
            promptInput( 'player' );
          }
          return;
        }
        alert( GLOBAL_CONFIG.game.movePromptObj[ 'win' + this.getCurrentPlayer().name ] );
      },
      gameId: gameId,
      startGame() {
        if ( GLOBAL_CONFIG.game.cliMode ) {
          promptInput( 'player' );
        } else {
          this.getOrChangePlayer();
        }
      }
    }
  };
});
