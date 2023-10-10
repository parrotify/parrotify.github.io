let basicParrotImage = "https://partyparrotasaservice.vercel.app/api/partyparrot"
let imageHeightChanged = 20;
let imageWidthChanged = 20;

function parrotify(scale=1) {
    const parrotOverlayImage = document.getElementById("parrot").value;
    const parrotOverlayOffsetX = parseInt(document.getElementById("horizontalPosition" ).value)*scale;
    const parrotOverlayOffsetY = parseInt(document.getElementById("verticalPosition").value)*scale;
    const scaledHeight = imageHeightChanged * scale;
    const scaledWidth = imageWidthChanged * scale;
    const newImprovedParrot = basicParrotImage + "?overlay=" + parrotOverlayImage + "&overlayWidth=" + scaledWidth + "&overlayHeight=" + scaledHeight + "&overlayOffsetX=" + parrotOverlayOffsetX + "&overlayOffsetY=" + parrotOverlayOffsetY;
    document.getElementById("parrotImage").src = newImprovedParrot;
    document.getElementById("parrotImageURL").value = newImprovedParrot;
}

function showErrorMessage(){
    document.getElementById("error").innerHTML = "Please enter a valid image URL";
    document.getElementById("parrotImage").src = basicParrotImage;
}

function getImageSize(url) {
    let image = new Image();
    image.onerror = function () {
        showErrorMessage();
    }
    image.onload = function () {
        imageHeightOriginal = this.height;
        imageWidthOriginal = this.width;
        imageHeightChanged = 20;
        imageWidthChanged = Math.round((imageWidthOriginal / imageHeightOriginal) * imageHeightChanged);
        document.getElementById("error").innerHTML = ""
        parrotify();
    }
    image.src = url;
}

function changeOverlainImageSize(percentage) {
    percentageDecimal = percentage / 100;
    imageHeightChanged = 20 * percentageDecimal;
    imageWidthChanged = Math.round((imageWidthOriginal / imageHeightOriginal) * 20) * percentageDecimal;
    parrotify();
}

function showImagePercentage(newValue) {
    document.getElementById("sizeChangeDisplay").innerHTML = newValue;
}

function showValueHorizontal(newValue) {
    document.getElementById("rangeHorizontalPosition").innerHTML = newValue;
}

function showValueVertical(newValue) {
    document.getElementById("rangeVerticalPosition").innerHTML = newValue;
}

function removeSelectedElement() {
    const parrotchoices = document.getElementsByClassName('parrotchoice');
    for (let j = 0; j < parrotchoices.length; j++) {
        if(parrotchoices[j].classList.contains("selected")){
            parrotchoices[j].classList.remove("selected");
        }
    }
}

function determineSelectedParrot(el) {
    const choice = el.childNodes[1].innerHTML;
    switch(choice) {
        case "Original":
            basicParrotImage = "https://partyparrotasaservice.vercel.app/api/partyparrot";
            parrotify()
            break;
        case "Flipped":
            basicParrotImage = "https://partyparrotasaservice.vercel.app/api/partyparrot/rightparrot";
            parrotify()
            break;
        case "Middle":
            basicParrotImage = "https://partyparrotasaservice.vercel.app/api/partyparrot/middleparrot";
            parrotify()
            break;
        case "Conga":
            basicParrotImage = "https://partyparrotasaservice.vercel.app/api/partyparrot/congaparrot";
            parrotify()
            break;
        case "Bored":
            basicParrotImage = "https://partyparrotasaservice.vercel.app/api/partyparrot/boredparrot";
            parrotify()
            break;
        case "Mega":
            basicParrotImage = "https://ppaas.herokuapp.com/partyparrot/mega";
            parrotify(10)
            break;
        default:
            basicParrotImage = "https://partyparrotasaservice.vercel.app/api/partyparrot";
            parrotify()
    }
}

window.addEventListener('load', function () {
    const parrotchoices = document.getElementsByClassName('parrotchoice');
    for (let i = 0; i < parrotchoices.length; i++) {
        parrotchoices[i].addEventListener('click', function () {
            if (this.classList.contains("selected")) {
                this.classList.remove("selected");
            } else {
                removeSelectedElement();
                this.classList.add("selected");
                determineSelectedParrot(this);
            }
        })
    }
});