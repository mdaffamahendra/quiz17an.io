const save = document.querySelector('.save-score');
const username = document.querySelector('.name');
const hasil = document.querySelector('.hasil');
const infoStatus = document.querySelector('.status');
const score = localStorage.getItem('score');
const highScore = JSON.parse(localStorage.getItem('highScore')) || [];
const playAgain = document.querySelector('.play-again');
const leadboard = document.querySelector('.leadboard-score');

const musicOn = document.querySelector('.music-on');
const musicOff = document.querySelector('.music-off');
const bsHariMerdeka = document.querySelector('.bs-merdeka');
const alertUsername = document.querySelector('.alert-username');

const maxScore = 5;

addMusic = () => {
    if(musicOn.style.display != 'block'){
        musicOff.style.display = 'none';
        musicOn.style.display = 'block';
        bsHariMerdeka.play();
    } else {
        musicOn.style.display = 'none';
        musicOff.style.display = 'block';
        bsHariMerdeka.pause();
    }
};



hasil.textContent = `${score}`;
if(score < 50) {
    infoStatus.textContent = 'Tetap Semangat!!!'
} else if (score >= 50 && score < 70) {
    infoStatus.textContent = 'Kamu Sudah Cukup Baik!'
} else if (score >= 70 && score <= 90){
    infoStatus.textContent = 'Wow, Kamu Keren Sekali!!!'
} else {
    infoStatus.textContent = 'Sempurna, Kamu Hebat Sekali!!!'
}


save.addEventListener('click', function(e){
    if(username.value == ''){
        alertUsername.style.display = 'block';
    } else {
        const dataScore = {
            username : username.value,
            score : score,
        }
        highScore.push(dataScore);
    
        highScore.sort( (a, b) => b.score - a.score);
    
        highScore.splice(5);
    
        localStorage.setItem('highScore', JSON.stringify(highScore));
        username.value = '';
        alertUsername.style.display = 'none';

        // window.location.assign('main.html')
        window.location.assign('end.html');
        e.preventDefault();
    }
    }
);

let addLeadboardOneClick = true;
addLeadboard = () => {
    let maxLeadboard = 5;
    if(leadboard.style.display != 'flex'){
        leadboard.style.display = 'flex';
        if(addLeadboardOneClick) {
            for(let i = 0; i < maxLeadboard; i++){
               leadboard.innerHTML += `<div class="leadboard-score-place">
                <div class="nama-leadboard">${highScore[i].username}</div>
                <div class="score-leadboard">${highScore[i].score}</div>
            </div>`
            }
            
        }
    } else {
        leadboard.style.display = 'none';
    }
    addLeadboardOneClick = false;
}

addPlayAgain = () => {
    window.location.assign('main.html')
};

addHome = () => {
    window.location.assign('homepage.html')
}


