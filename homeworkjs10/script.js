document.addEventListener("DOMContentLoaded", function () {
    let cont = document.getElementById('container');


    window.addEventListener('keydown', (e) => {
        cont.innerHTML += e.key;
    });


})