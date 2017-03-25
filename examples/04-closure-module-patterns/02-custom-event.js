// TODO: get rid of global by switching to ajax + readystate + eval in load.js
var globalCustomEvents = (function customEvents() {
  var events = {
    clearSelections: new CustomEvent( 'clearSelections' ),
    addSelection: new CustomEvent( 'addSelection', { 
      selectionChange: 1
    }),
    removeSelection: new CustomEvent( 'removeSelection', { 
      selectionChange: -1 
    })
  };

  return events;
})();
