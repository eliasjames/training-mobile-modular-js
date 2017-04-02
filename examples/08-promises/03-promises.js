window.addEventListener( 'DOMContentLoaded', 
  function onBodyLoad() {
    addHandlers();
  }
);

function addHandlers() {
  document.getElementsByTagName( 'button' )[0]
    .addEventListener( 'click', ()=>{ 
      const permissionPromise = makeAjaxCall( 'check-permission' );
      permissionPromise.then( ( xhr ) => {
        if ( JSON.parse( xhr.response ).permission ) {
          const restrictedPromise = makeAjaxCall( 'restricted-thing' );
          restrictedPromise.then( ( xhr ) => {
            console.log( 'success!' );
          }).catch( () => {
            console.log( 'fail!' ); 
          }); 
          return;
        }
        console.log( 'Not allowed' );
      }).catch( () => { 
        console.log( 'fail!' ); 
      });
    });
}
function makeAjaxCall( path ) {
  const myAjax = new XMLHttpRequest(),
    myPromise = new Promise( ( resolve, reject ) => {
      myAjax.addEventListener( 'load', function onAjaxLoad() {
        const response = JSON.parse( this.response );
        
        if ( response.message ) {
          console.log( 'response.message', response.message );
        }
        if ( this.status !== 200 ) {
          reject( this );    
        }
        resolve( this );
      });
      myAjax.open( 'GET', 'http://localhost:3000/' + path );
      myAjax.send();
    });
  
  return myPromise;
}
