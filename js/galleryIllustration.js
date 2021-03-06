const gallery = document.getElementById('gallery');
const selectedImage = document.getElementById('selectedImage');
const popup = document.getElementById('popup');
const imageIndexes = [1,2,3,4,5,6,7,8,9,10,11];
const selectedIndex = null;

imageIndexes.forEach( i => {
    const image = document.createElement('img');
    image.src = `img/illustration_thumbnail/image-${i}.jpg`;
    image.alt = `Gallery image ${i}`;
    image.classList.add('galleryImg');

    image.addEventListener( 'click', () => {
        selectedImage.src = `img/illustration/image-${i}.jpg`; 
        selectedImage.alt = `Gallery image ${i}`;
        selectedImage.onload = function() {
            popup.style.transform =  'translateY(0)';
        }
    })

    gallery.appendChild(image);

});

popup.addEventListener('click', () => {
    popup.style.transform =  'translateY(-100%)';
    popup.src = '';
    popup.alt = '';
})