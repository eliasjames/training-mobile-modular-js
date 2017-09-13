$( document ).ready( function() {
  buildGameUI( 'board-location' );
  bindGameUI();
  bindCurrentPlayer();
  startGame();
});

function bindCurrentPlayer() {
  $( document ).on( 'changePlayer', function( e ) {
    $( '#current-player' ).html( 'Current player: ' + e.detail );
  });
}
function bindGameUI() {
  $( 'input' ).on( 'click', function( e ) {
      var clickTarget = e.target;
      acceptInput( clickTarget.name );
  });
}
function buildGameUI( gameBoardID ) {
  let tableEl = $( '<table>' );

  for ( let row = 0; row < 3; row++ ) {
    let tableRowEl = $( '<tr>' );

    for ( let column = 0; column < 3; column++ ) {
      let tableDataEl = $( '<td>' );

      for ( let player = 0; player < 2; player++ ) {
        let currentPlayer = playerAttributesObj[ player ];
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
  $( '#' + gameBoardID ).append( tableEl );
}
