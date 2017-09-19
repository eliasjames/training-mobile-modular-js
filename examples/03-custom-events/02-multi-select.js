function multiSelect( customEvents ) { 
  var allMultiSelects = document.getElementsByClassName( 'multi-select' );

  for ( var i=0; i<allMultiSelects.length; i++ ) {
    init( allMultiSelects[i] );
  }

  // helper function for iterating
  function iterateChoiceSiblings( iterator, siblings ) {
    for ( let i=0; i < siblings.length; i++ ) {
      iterator( i );
    }
  }

  function init( parentMS ) {
    var choiceSiblings = parentMS.children;
    parentMS.addEventListener( 'click', function ( evt ){
      console.log( 'target', evt ); 
    });
    parentMS.addEventListener( 'clearSelections', function ( evt ){
      onClearSelections();
    });
    
    for ( var i=0; i<choiceSiblings.length; i++ ) {
      choiceSiblings[i].addEventListener( 'click', onTargetClick );
    }

    function onClearSelections() {
      iterateChoiceSiblings( function( i ) {
        removeSelected( choiceSiblings[i] );
      }, choiceSiblings );
    }

    function onTargetClick() {
      if ( this.classList.contains( 'selected' )) {
        removeSelected( this );
        return;
      } 
      this.className = 'selected';
      this.dispatchEvent( customEvents.addSelection );
    }

    function removeSelected( el ) {
      el.dispatchEvent( customEvents.removeSelection );
      // TODO: remove selected, leave other classes
      el.className = '';
    }
  }

  window.addEventListener( 'click', onClickOutsideTarget );

  function onClickOutsideTarget( evt ) {
    console.log( 'window', evt );
    var hitSomeTarget = false;

    function outsideIterator( i ) {
      hitSomeTarget = hitSomeTarget ? hitSomeTarget : (
        evt.target === outsideSiblings[i]
      );
    }
    var outsideSiblings = []; 
    for ( var i=0; i<allMultiSelects.length; i++ ) {
      outsideSiblings.push( allMultiSelects[i] );
    }
    iterateChoiceSiblings( outsideIterator, outsideSiblings );

    if ( !hitSomeTarget ) {
      if ( evt.target.className !== 'multi-select' 
        && evt.target.parentElement.className !== 'multi-select' 
      ) {
        function iterateClearSelections( i ) {
          allMultiSelects[i].dispatchEvent( customEvents.clearSelections );
        }
        iterateChoiceSiblings( iterateClearSelections, allMultiSelects ); 
      }
    }
  }
}
