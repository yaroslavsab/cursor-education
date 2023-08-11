let valueDiaplays = document.querySelectorAll(".total__digit");
let interval = 8000;

valueDiaplays.forEach((valueDispay) => {
    let startValue = 0;
    let endValue = parseInt(valueDispay.getAttribute("data-val"));
    console.log(endValue);
    let duration = setInterval(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDispay.textContent = startValue;
        if (startValue === endValue) {
            clearInterval(counter);
        }
    }, duration);
});

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});