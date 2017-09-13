$( document ).ready(function() {
    $( '#' + GLOBAL_CONFIG.ui.els.newGame )
      .on( 'click', ()=>{
        document.dispatchEvent( new Event( 'startNewGame' ));
      })
});
