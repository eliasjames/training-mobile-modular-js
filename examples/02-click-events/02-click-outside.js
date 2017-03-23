window.addEventListener( 'DOMContentLoaded',  onDomContentLoad );

function onDomContentLoad() { 
  // TODO: iterate through all click-target instead of taking first one directly
  var clickTarget = document.getElementsByClassName( 'click-target' )[0],
    clickChoices = clickTarget.children;

  clickTarget.addEventListener( 'click', function ( evt ){
    console.log( 'target', evt ); 
  });
  
  for ( i=0; i<clickChoices.length; i++ ) {
    clickChoices[i].addEventListener( 'click', onTargetClick );
  }
  window.addEventListener( 'click', onClickOutsideTarget ); 

  function iterateClickChoices( iterator ) {
    for ( i=0; i<clickChoices.length; i++ ) {
      iterator( i );
    }
  }
  function onClickOutsideTarget( evt ) {
    console.log( 'window', evt );
    var hitTarget;

    function outsideIterator( i ) {
      hitTarget = hitTarget ? hitTarget : evt.target === clickChoices[i];
    }
    
    iterateClickChoices( outsideIterator );

    if ( !hitTarget ) {
      iterateClickChoices( function( i ) {
        // TODO: remove selected, leave other classes
        clickChoices[i].className = '';
      });
    }
  }
}

function onTargetClick() {
  if ( this.classList.contains( 'selected' )) {
    // TODO: remove selected, leave other classes
    this.className = '';
    return;
  } 
  this.className = 'selected';
}
