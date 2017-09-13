$( document ).ready(function() {
  // TODO: move new game to config
    $( '#' + GLOBAL_CONFIG.ui.els.newGame )
      .on( 'click', ()=>{
        console.log( 'new game button clicked' );
        initGame();
      })
});
