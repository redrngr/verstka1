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
    let out2 = '';
    for (let id in pets) {
        out += `<div class="petcard">`;
        out += `<img src="img/petscards/${pets[id].img}" width="226">`;
        out += `<p class="grey">${pets[id].name}</p>`;
        out += `<div class="margin-btn">`;
        out += `<a class="button modal-ref" href="#openModal" data-id="${id}">Узнать больше</a>`;
        out += '</div></div>'; 
        out2 += `<div class="modal-content"><div class="modal-img">`;
        out2 += `<img src="img/petscards/${pets[id].img}" width="226"></div>`;
        out2 += `<div class="modal-body">`;
        out2 += `<h2>${pets[id].name}</h2>`;
        out2 += `<h3>${pets[id].breed}</h3>`;
        out2 += `<p>${pets[id].description}</p>`;
        out2 += `<ul><li>Возраст: ${pets[id].age}</li>`;
        out2 += `<li>Прививки: ${pets[id].inoculation}</li>`;
        out2 += `<li>Заболевания: ${pets[id].diseases}</li>`;
        out2 += `<li>Паразиты: ${pets[id].peresites}</li></ul>`;
        out2 += `</div></div>`;
    }
    $('#polosa').html(out);
    $('.modal-dialog').html(out2);  
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
