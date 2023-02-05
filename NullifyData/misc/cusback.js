// prompts user with image address, replaces img src with inputted image address
var CustomImage = prompt('Paste your custom image address here: (Recommended dimensions are 1020 x 603)')
setInterval(function () { document.getElementById("background-image").src=CustomImage;
}, 1000);

if (CustomImage === undefined || CustomImage === null) { // reloads i-ready if prompt is canceled
  location.reload()
}