alert("Helo World");
function index(){
    const heading = document.querySelector('h1');
    if (heading.innerHTML === 'helo bra') {
        heading.innerHTML = 'goodbye bra';
    } else{
    heading.innerHTML = 'helo bra';
}
}