import _ from 'lodash';

function component () {
    var element = document.createElement( 'div' );

    /* lodash is required for the next line to work */
    element.innerHTML = _.join( [ 'Hello','webpack' ], ' ' );

    return element;
}

(function onWebpackStart() {
  window.addEventListener( 'DOMContentLoaded',  function onDomContentLoaded() {
    document.body.appendChild( component() );
  });
})();
