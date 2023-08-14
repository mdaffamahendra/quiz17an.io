const btnBack = document.querySelector('.btn-back');
const btnMusic = document.querySelector('.btn-music');
const musicOn = document.querySelector('.music-on');
const musicOff = document.querySelector('.music-off');
const bsHariMerdeka = document.querySelector('.bs-merdeka');

btnBack.addEventListener('click', function(){
    window.location.href = 'homepage.html'
})

btnMusic.addEventListener('click', function(){
    if(musicOn.style.display != 'block'){
        musicOff.style.display = 'none';
        musicOn.style.display = 'block';
        bsHariMerdeka.play();
    } else {
        musicOn.style.display = 'none';
        musicOff.style.display = 'block';
        bsHariMerdeka.pause();
    }

})