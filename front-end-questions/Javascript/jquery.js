/**
 * Created by hermanwu on 1/25/18.
 */
// example of jquery click:

// addEventListener()
$( ".target" ).click(function() {
    alert( "Handler for .click() called." );
});


$( "#dataTable tbody tr" ).on( "click", function() {
    console.log( $( this ).text() );
});

// just javascript
var myEl = document.getElementsByClassName('target');

myEl.addEventListener('click', function() {
    alert('Hello world again!!!');
}, false);