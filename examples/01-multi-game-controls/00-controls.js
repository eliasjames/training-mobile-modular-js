$( document ).ready(function() {
  // TODO: move new game to config
  $( '#' + GLOBAL_CONFIG.ui.els.boardLocation ).html( 
    $( '<button>' )
      .attr( 'id', GLOBAL_CONFIG.ui.els.newGame )
      .html( 'New game' )
      .on( 'click', ()=>{
        console.log( 'new game button clicked' );
      })
  );
});
