const btnTentang = document.querySelector('.tentang-game');
const btnMusic = document.querySelector('.music');
const btnMulai = document.querySelector('.mulai-game');
const musicOn = document.querySelector('.music-on');
const musicOff = document.querySelector('.music-off');
const musicMerdeka = document.querySelector('.bs-merdeka');
btnMusic.addEventListener('click', function (){
    if(musicOn.style.display != 'block'){
        musicOff.style.display = 'none';
        musicOn.style.display = 'block';
        musicMerdeka.play();
    } else {
        musicOn.style.display = 'none';
        musicOff.style.display = 'block';
        musicMerdeka.pause();
    }
});

btnTentang.addEventListener('click', () => {
    window.location.assign('tentang.html');
})

btnMulai.addEventListener('click', function(){
    window.location.assign('main.html');
})