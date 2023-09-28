document.addEventListener('DOMContentloaded', function() {
     // Change font color to red
     document.querySelector('#red').onclick = function() {
        document.querySelector('#hello').style.color = 'red';
     }
     // Change font color to red
     document.querySelector('#blue').onclick = function() {
        document.querySelector('#hello').style.color = 'blue';
     }
     // Change font color to red
     document.querySelector('#green').onclick = function() {
        document.querySelector('#hello').style.color = 'green';
     }
});