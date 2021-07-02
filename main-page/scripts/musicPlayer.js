let musicStart = false;
let changeAlbumImage = false;

function toggleImage() {
    changeAlbumImage ^= true;
    console.log(changeAlbumImage);
    setImage();    
}


function setImage() {
    if (changeAlbumImage == true) {
        let image = document.getElementById('album');
        let leftArrowImage = document.getElementById('left-arrow');
        let rightArrowImage = document.getElementById('right-arrow');
        image.src = "./images/mplate.gif";
        image.width = "135";
        image.height = "132";
        leftArrowImage.style.display = "none";
        rightArrowImage.style.display = "none";
        image.style.marginTop = "10px";
        musicStart = true;
        getAudio();
    } else {
        let image = document.getElementById('album');
        let leftArrowImage = document.getElementById('left-arrow');
        let rightArrowImage = document.getElementById('right-arrow');
        image.src = "./images/sweet_ginger_green_album.svg";        
        musicStart = false;
        getPause();
    }
    
}
let audio = new Audio('./audio/sweet_ginger_green.mp3');
function getAudio() {      
    audio.play();
    console.log('music!');
    confirm('Now will playing  Pearce-Pickering Barrelhouse -\"Sweet Ginger Green\"');   
}
function getPause() {

    audio.pause();
}