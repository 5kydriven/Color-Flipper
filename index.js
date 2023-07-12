const clickbtn = document.querySelector('.container__button');
const colortxt = document.querySelector('.color');
const reset = document.getElementById('reset');

clickbtn.addEventListener('click', () => {
    let colorPicker = Math.floor(Math.random() * 6);
    if (colorPicker == 0) {
        document.body.style.backgroundColor = "red";
        colortxt.innerHTML = "red";
        colortxt.style.color = "red";
    } else if (colorPicker == 1) {
        document.body.style.backgroundColor = "blue";
        colortxt.innerHTML = "blue";
        colortxt.style.color = "blue";
    } else if (colorPicker == 2) {
        document.body.style.backgroundColor = "green";
        colortxt.innerHTML = "green";
        colortxt.style.color = "green";
    } else if (colorPicker == 3) {
        document.body.style.backgroundColor = "yellow";
        colortxt.innerHTML = "yellow";
        colortxt.style.color = "yellow";
    } else if (colorPicker == 4) {
        document.body.style.backgroundColor = "pink";
        colortxt.innerHTML = "pink";
        colortxt.style.color = "pink";
    } else if (colorPicker == 5) {
        document.body.style.backgroundColor = "violet";
        colortxt.innerHTML = "violet";
        colortxt.style.color = "violet";
    } else {
        document.body.style.backgroundColor = "aquamarine";
        colortxt.innerHTML = "aquamarine";
        colortxt.style.color = "aquamarine";
    }
})

reset.addEventListener('click', () => {
    document.body.style.backgroundColor = "hsl(206, 33%, 96%)";
    colortxt.innerHTML = "rgb(241, 245, 248)";
    colortxt.style.color = "rgb(241, 245, 248)";
})