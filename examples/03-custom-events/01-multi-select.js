function multiSelect( customEvents ) { 
  // TODO: iterate through all click-target instead of taking first one directly
  var choicesParent = document.getElementsByClassName( 'click-target' )[0],
    choicesSiblings = choicesParent.children;

  init();

  function init() {
    choicesParent.addEventListener( 'click', function ( evt ){
      console.log( 'target', evt ); 
    });
    choicesParent.addEventListener( 'clearSelections', function ( evt ){
      onClearSelections();
    });
    
    for ( i=0; i<choicesSiblings.length; i++ ) {
      choicesSiblings[i].addEventListener( 'click', onTargetClick );
    }
    window.addEventListener( 'click', onClickOutsideTarget ); 
  }

  function iteratechoicesSiblings( iterator ) {
    for ( i=0; i<choicesSiblings.length; i++ ) {
      iterator( i );
    }
  }

  function onClearSelections() {
    iteratechoicesSiblings( function( i ) {
      removeSelected( choicesSiblings[i] );
    });
  }

  function onClickOutsideTarget( evt ) {
    console.log( 'window', evt );
    var hitTarget;

    function outsideIterator( i ) {
      hitTarget = hitTarget ? hitTarget : evt.target === choicesSiblings[i];
    }
    iteratechoicesSiblings( outsideIterator );

    if ( !hitTarget ) {
      choicesParent.dispatchEvent( customEvents.clearSelections );
    }
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
