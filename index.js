let track = document.querySelector(".track");
let index = 0;

setInterval(() => {
    index++;

    let ancho = 400;

    track.style.transform = "translateX(" + (-index * ancho) + "px)";

    if(index >= 3){
        setTimeout(() => {
            track.style.transition = "none";
            track.style.transform = "translateX(0px)";
            index = 0;

            setTimeout(() => {
                track.style.transition = "transform 0.5s ease";
            }, 50);
        }, 3000);
    }

}, 3000);