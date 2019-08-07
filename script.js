var dinoElement = document.getElementById("dino")

document.onkeydown = (e) => {

    if (e.key =  " ") {

        dinoElement.style.bottom = 200 + "px"
        setTimeout(() => {
            dinoElement.style.bottom = 0 + "px"
        }, 500)

    }

}