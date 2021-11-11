var fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', handleImage, false);
var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');
var footer = document.getElementById('footer');

function handleImage(e) {
    var reader = new FileReader();
    reader.onload = function(event) {
        var img = new Image();
        img.onload = function() {
            // clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // calculate ratios to scale the images down to fit in the canvas
            var hRatio = canvas.width/img.width;
            var vRatio = canvas.height/img.height;
            var ratio  = Math.min (hRatio, vRatio);
            var xOffset = canvas.width/2-(img.width*ratio)/2
            ctx.drawImage(img, 0, 0, img.width, img.height, xOffset, 0, img.width*ratio, img.height*ratio);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
    footer.style.visibility = 'visible';
}

// function for download link
function downloadImage(el) {
    var image = canvas.toDataURL("image/jpg");
    el.href = image;
}