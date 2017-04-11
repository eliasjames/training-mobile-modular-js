(function() {
  var playlist = {
    init: function init( customEvents ) { 
			playlist.events = customEvents;

      // TODO: iterate through all click-target instead of taking first one directly
      var allMultiSelects = document.getElementsByClassName( 'multi-select' );

      for ( var i=0; i<allMultiSelects.length; i++ ) {
        init( allMultiSelects[i] );
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
        window.addEventListener( 'click', onClickOutsideTarget ); 

        function iterateChoiceSiblings( iterator ) {
          for ( i=0; i<choiceSiblings.length; i++ ) {
            iterator( i );
          }
        }

        function onClearSelections() {
          iterateChoiceSiblings( function( i ) {
            removeSelected( choiceSiblings[i] );
          });
        }

        function onClickOutsideTarget( evt ) {
          console.log( 'window', evt );
          var hitSomeTarget = false;

          function outsideIterator( i ) {
            // TODO: ignore clicks on other multi-selects
            // evt.target.srcElement.parentElement.classList.contains( 'multi-select' )
            hitSomeTarget = hitSomeTarget ? hitSomeTarget : (
              evt.target === choiceSiblings[i]
            );
          }
          iterateChoiceSiblings( outsideIterator );

          if ( !hitSomeTarget ) {
            parentMS.dispatchEvent( playlist.events.clearSelections );
          }
        }

        function onTargetClick() {
          if ( this.classList.contains( 'selected' )) {
            removeSelected( this );
            return;
          } 
          this.className = 'selected';
          this.dispatchEvent( playlist.events.addSelection );
        }

        function removeSelected( el ) {
          el.dispatchEvent( playlist.events.removeSelection );
          // TODO: remove selected, leave other classes
          el.className = '';
        }
      }
    }
  };

	window.addEventListener( 'onCustomEventScriptLoad', function( e ) {	
		playlist.init( e.detail );
	});

  return playlist;
})();
