let basicParrotImage = "https://ppaas.herokuapp.com/partyparrot"
let imageHeightChanged = 20;
let imageWidthChanged = 20;

function parrotify() {
    const parrotOverlayImage = document.getElementById("parrot").value;
    const parrotOverlayOffsetX = document.getElementById("horizontalPosition").value;
    const parrotOverlayOffsetY = document.getElementById("verticalPosition").value;
    const newImprovedParrot = basicParrotImage + "?overlay=" + parrotOverlayImage + "&overlayWidth=" + imageWidthChanged + "&overlayHeight=" + imageHeightChanged + "&overlayOffsetX=" + parrotOverlayOffsetX + "&overlayOffsetY=" + parrotOverlayOffsetY;
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
            basicParrotImage = "https://ppaas.herokuapp.com/partyparrot";
            parrotify()
            break;
        case "Flipped":
            basicParrotImage = "https://ppaas.herokuapp.com/partyparrot/rightparrot";
            parrotify()
            break;
        case "Middle":
            basicParrotImage = "https://ppaas.herokuapp.com/partyparrot/middleparrot";
            parrotify()
            break;
        case "Conga":
            basicParrotImage = "https://ppaas.herokuapp.com/partyparrot/congaparrot";
            parrotify()
            break;
        case "Bored":
            basicParrotImage = "https://ppaas.herokuapp.com/partyparrot/boredparrot";
            parrotify()
            break;
        default:
            basicParrotImage = "https://ppaas.herokuapp.com/partyparrot";
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