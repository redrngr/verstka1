function showSlider(data) {
    let item = JSON.parse(data);
    let out = '';
    for (let id in item) {
        out += `<a class="slider_ref" href="/item#${id}">`;
        out += `<img src="images/${item[id].image}" width="128">`;
        out += '</a>';  
    }
    $('#polosa').html(out);
    $('.slider_ref').click(function () {
        hash = window.location.hash.substring(1);
        init(showItem);
    });
}

let val = 0;
document.getElementById('slider_up').onclick = sliderUp;
document.getElementById('slider_down').onclick = sliderDown;

function sliderUp() {
    let polosa = document.getElementById('polosa');
    if (val > -512) {
        val -= 128;
    }
    polosa.style.top = val + 'px';
}

function sliderDown() {
    let polosa = document.getElementById('polosa');
    if (val < 384) {
        val += 128;
    }
    polosa.style.top = val + 'px';
}