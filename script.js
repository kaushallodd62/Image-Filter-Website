var fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', handleImage, false);
var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');

function handleImage(e) {
    var reader = new FileReader();
    reader.onload = function(event) {
        var img = new Image();
        img.onload = function() {
            var hRatio = canvas.width / img.width    ;
            var vRatio = canvas.height / img.height  ;
            var ratio  = Math.min ( hRatio, vRatio );
            ctx.drawImage(img, 0,0, img.width, img.height, 0,0,img.width*ratio, img.height*ratio);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}