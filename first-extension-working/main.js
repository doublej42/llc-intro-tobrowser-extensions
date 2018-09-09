var allImages = document.getElementsByTagName('img');
console.log(allImages);
for (var i = 0; i < allImages.length; i++) {
    console.log(allImages[i]);
    var imageHeight = allImages[i].clientHeight;
    var imageWidth = allImages[i].clientWidth;
    allImages[i].setAttribute('src', 'https://placekitten.com/' + imageWidth + '/' + imageHeight);
}