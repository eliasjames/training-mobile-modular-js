(function customEvents() {
  var events = {
    clearSelections: new CustomEvent( 'clearSelections' ),
    addSelection: new CustomEvent( 'addSelection', { 
      selectionChange: 1
    }),
    removeSelection: new CustomEvent( 'removeSelection', { 
      selectionChange: -1 
    })
  };

	window.dispatchEvent( new CustomEvent( 'onCustomEventScriptLoad' , { detail: events } ));
})();
