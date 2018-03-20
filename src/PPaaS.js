var basicParrotImage = "https://ppaas.herokuapp.com/partyparrot"
var imageHeightChanged = 20;
var imageWidthChanged = 20;

function parrotify() {
    var parrotOverlayImage = document.getElementById("parrot").value;
    var parrotOverlayOffsetX = document.getElementById("horizontalPosition").value;
    var parrotOverlayOffsetY = document.getElementById("verticalPosition").value;
    var newImprovedParrot = basicParrotImage + "?overlay=" + parrotOverlayImage + "&overlayWidth=" + imageWidthChanged + "&overlayHeight=" + imageHeightChanged + "&overlayOffsetX=" + parrotOverlayOffsetX + "&overlayOffsetY=" + parrotOverlayOffsetY;
    document.getElementById("parrotImage").src = newImprovedParrot;
    document.getElementById("parrotImageURL").value = newImprovedParrot;
}

function showErrorMessage(){
    document.getElementById("error").innerHTML = "Please enter a valid image URL";
    document.getElementById("parrotImage").src = basicParrotImage;
}

function getImageSize(url) {
    var image = new Image();
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
    var parrotchoices = document.getElementsByClassName('parrotchoice');
    for (var i = 0; i< parrotchoices.length; i++) {
        if(parrotchoices[i].classList.contains("selected")){
            parrotchoices[i].classList.remove("selected");
        }
    }
}

function determineSelectedParrot(el) {
    var choice = el.childNodes[1].innerHTML;
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
    var parrotchoices = document.getElementsByClassName('parrotchoice');
    for (var i = 0; i< parrotchoices.length; i++) {
        parrotchoices[i].addEventListener('click', function () {
            if(this.classList.contains("selected")){
                this.classList.remove("selected");
            }else{
                removeSelectedElement();
                this.classList.add("selected");
                determineSelectedParrot(this);
            }
        })
    }
});