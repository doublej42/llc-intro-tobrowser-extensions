var allImages = document.getElementsByTagName('img');
console.log(allImages);
for (var i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener('mouseenter',function() {
        var imageHeight = this.clientHeight;
        var imageWidth = this.clientWidth;
        this.setAttribute('data-originalsrc', this.getAttribute('src'));
        this.setAttribute('src', 'https://placekitten.com/' + imageWidth + '/' + imageHeight);
    });
    allImages[i].addEventListener('mouseleave',function() {
        this.setAttribute('src', this.getAttribute('data-originalsrc'));
    });
    
    console.log(allImages[i]);
    
}