for (var i = 0; i <= 100; i++) {
    print(i);
}

function print(i) {
    setTimeout(function () {
        document.querySelector(".div_text>h1").textContent = "" + i + "%";
        var blurVal = scale(i, 0, 100, 25, 0);
        // console.log(blurVal);
        document.querySelector(".div_image>img").style.filter = `blur(${blurVal}px)`;
        // var op = 1 - (i / 100);
        var op = scale(i, 0, 100, 1, 0);
        document.querySelector("h1").style.opacity = "" + op;
    }, i * 50);
}


function scale(num, in_min, in_max, out_min, out_max) {
    var in_range = (in_max - in_min);
    var out_range = (out_max - out_min);
    return (((num - in_min) / in_range) * out_range) + out_min;
}
