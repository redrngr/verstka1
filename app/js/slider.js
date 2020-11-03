$(document).ready(function() {
    init();
});

function init() {
    $.post(
        "core/core.php",
        {
            "action" : "init"
        },
        showSlider
    );
}

function showSlider(data) {
    let pets = JSON.parse(data);
    let out = '';
    for (let id in pets) {
        out += `<div class="petcard">`
        out += `<img src="img/petscards/${pets[id].img}" width="200">`;
        out += `<p class="">${pets[id].name}</p>`;
        out += `<a class="button" href="/pet#${id}">Узнать больше</a>`;
        out += '</div>';  
    }
    $('#polosa').html(out);
}

let val = 0;
document.getElementById('slider_left').onclick = sliderLeft;
document.getElementById('slider_right').onclick = sliderRight;

function sliderLeft() {
    let polosa = document.getElementById('polosa');
    if (val > -512) {
        val -= 128;
    }
    polosa.style.top = val + 'px';
}

function sliderRight() {
    let polosa = document.getElementById('polosa');
    if (val < 384) {
        val += 128;
    }
    polosa.style.top = val + 'px';
}