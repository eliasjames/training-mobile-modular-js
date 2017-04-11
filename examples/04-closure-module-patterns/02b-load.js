(function() {
  window.addEventListener( 'DOMContentLoaded',  onDomContentLoad );
  
  function onDomContentLoad() { 
    [ 
      { name: 'dynamic-modules-completed' , callback: onDynamicModules }, 
      { name: 'custom-event', callback: onCustomEvent } 
    ].forEach( function( eachId ) {
      registerScriptHandler( eachId.name, eachId.callback );
    });  
  }
  function onDynamicModules() {
    console.log( 'onDynamicModules' );
  }
  function onCustomEvent() {
    // maybe do something post-load 
  }
  function registerScriptHandler( id, callback ) {
    var script = document.createElement( 'script' ),
			head = document.getElementsByTagName('head')[0];

    script.onload = script.onreadystatechange = function() {
			if ( !this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
				callback();

				// Handle memory leak in IE
				script.onload = script.onreadystatechange = null;
				head.removeChild( script );
			}
    };
    script.src = '02b-' + id + '.js';
    head.appendChild( script );
  }
})();
