const gallery = document.getElementById('gallery');
const selectedImage = document.getElementById('selectedImage');
const popup = document.getElementById('popup');
const imageIndexes = [1,2,3,4,5,6,7,8,9,10];
const selectedIndex = null;

imageIndexes.forEach( i => {
    const image = document.createElement('img');
    image.src = `img/3d_thumbnail/image-${i}.jpg`;
    image.alt = `Gallery image ${i}`;
    image.classList.add('galleryImg');

    image.addEventListener( 'click', () => {
        // popup
        selectedImage.src = `img/3d/image-${i}.jpg`; 
        selectedImage.alt = `Gallery image ${i}`;
        popup.style.transform =  'translateY(0)';
    })

    gallery.appendChild(image);

});

popup.addEventListener('click', () => {
    popup.style.transform =  'translateY(-100%)';
    popup.scr = '';
    popup.alt = '';
})