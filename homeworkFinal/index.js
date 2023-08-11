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