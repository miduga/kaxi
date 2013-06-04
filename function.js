var pandaNinja = 'data:image/png;base64,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';

Rainbow.color();

var cache = kaxi.get( 'example1' );
var cache2 = kaxi.get( 'example2' );
var cache3 = kaxi.get( 'example3' );

console.log( cache );
console.log( cache2 );
console.log( cache3 );

var primera_vez = document.getElementById( 'primera_vez' );
var usando_kaxi = document.getElementById( 'usando_kaxi' );

if ( cache && cache2 && cache3 )
{
  primera_vez.style.display = 'none';
  document.getElementById( 'cache1_result' ).innerHTML = cache;
  document.getElementById( 'cache2_result' ).innerHTML = JSON.stringify( cache2 );
  document.getElementById( 'cache3_result' ).src = cache3;
}
else
{
  usando_kaxi.style.display = 'none';
  // guardando cache en kaxi
  kaxi.set( 'example1', "Hay un panda ninja en mi casa", 10 );
  kaxi.set( 'example2', { animal: 'Panda' }, 10 );
  kaxi.set( 'example3', pandaNinja, 10 );
  
  document.getElementById( 'recargar_pagina' ).onclick = function( e ) {
    e.preventDefault();
    window.location.href = window.location.href;
  };
}