$( document ).ready(function() {
    $( '#' + GLOBAL_CONFIG.ui.els.newGame )
      .on( 'click', ()=>{
        ticTacToe.newGame();
      })
});
