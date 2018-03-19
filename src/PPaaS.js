const basicParrotImage = "https://ppaas.herokuapp.com/partyparrot"
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

function getImageSize(url) {
    var image = new Image();
    image.onerror = function () {
        document.getElementById("error").innerHTML = "Please enter a valid image URL"
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