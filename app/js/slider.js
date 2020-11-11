$(document).ready(function() {
    variationSlider();
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

function variationSlider() {
    let out = '';
    out += `<div class="my-slider">`;
    out += `<button class="slider_btn" id="slider_left"><i class="fa fa-arrow-left fa-lg" aria-hidden="true"></i></button>`;
    out += `<div class="slider">`;
    out += `<div id="polosa" class="polosa">`;
    out += '</div></div>';
    out += `<button class="slider_btn" id="slider_right"><i class="fa fa-arrow-right fa-lg" aria-hidden="true"></i></button></div>`;
    out += `<div class="margin-btn"><a href="#pets" id="more" class="button hovered">Больше</a></div>`; 
    $('.pets-block').html(out);
    let val = 0;
    document.getElementById('more').onclick = variationAll;
    document.getElementById('slider_left').onclick = sliderRight;
    document.getElementById('slider_right').onclick = sliderLeft;
    init();
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

}

function showSlider(data) {
    let pets = JSON.parse(data);
    let out1 = '';
    let out2 = '';
    for (let id in pets) {
        out1 += `<div class="petcard">`;
        out1 += `<img src="img/petscards/${pets[id].img}" width="226">`;
        out1 += `<p class="grey">${pets[id].name}</p>`;
        out1 += `<div class="margin-btn">`;
        out1 += `<a class="button" href="#openModal">Узнать больше</a>`;
        out1 += '</div></div>';
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
    $('#polosa').html(out1);
    $('.modal-dialog').html(out2);  
}



function variationAll() {
    let out = '';
    out += `<div class="allpets">`;
    out += `<div class="polosa" id="polosa"></div></div>`;
    out += `<div class="margin-btn"><a href="#pets" id="less" class="button hovered">Меньше</a></div>`; 
    $('.pets-block').html(out);
    init();
    document.getElementById('less').onclick = variationSlider;
}
