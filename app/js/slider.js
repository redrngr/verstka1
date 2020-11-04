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
        out += `<img src="img/petscards/${pets[id].img}" width="226">`;
        out += `<p class="grey">${pets[id].name}</p>`;
        out += `<div class="margin-btn">`
        out += `<a class="button" href="/pet#${id}">Узнать больше</a>`;
        out += '</div></div>';  
    }
    $('#polosa').html(out);
}

let val = 0;
document.getElementById('slider_left').onclick = sliderRight;
document.getElementById('slider_right').onclick = sliderLeft;

function sliderLeft() {
    let polosa = document.getElementById('polosa');
    if (val > -1470) {
        val -= 294;
    }
    polosa.style.left = val + 'px';
}

function sliderRight() {
    let polosa = document.getElementById('polosa');
    polosa.style.left = val + 'px';
    if (val < 0) {
        val += 294;
    }
}