// ANTI-PATTERN - don't do this!
window.myNamespace = { permission: undefined };

window.addEventListener( 'DOMContentLoaded', 
  function onBodyLoad() {
    checkPermission();
    addHandlers();
  }
);

function addHandlers() {
  document.getElementsByTagName( 'button' )[0]
    .addEventListener( 'click', ()=>{ 
      checkPermission();
      if ( window.myNamespace.permission ) {
        makeAjaxCall( 
        'restricted-thing',
         ()=>{ console.log( 'success!' );  },
         ()=>{ console.log( 'fail!' );  }
        ); 
      } else {
        console.log( 'Not allowed' );
      }
    });
}
function checkPermission() {
  makeAjaxCall( 
    'check-permission',
     ( xhr )=>{  
       window.myNamespace.permission = JSON.parse( xhr.response ).permission;  
     }, 
     ()=>{ console.log( 'fail!' );  }
  );
}
function makeAjaxCall( path, success, fail ) {
  let myAjax = new XMLHttpRequest(),
    mySuccess = success || function() {},
    myFail = fail || function() {};
  
  myAjax.addEventListener( 'load', reqListener );
  myAjax.open( 'GET', 'http://localhost:3000/' + path );
  myAjax.send();

  function reqListener () {
    const response = JSON.parse( this.response );
    if ( response.message ) {
      console.log( 'response.message', response.message );
    }
    if ( this.status !== 200 ) {
      return fail( this );    
    }
    return success( this );
  }
}
