const colors = ['#ffffff', '#a8aeae', '#a9ca8d', '#8d9eca', '#bd8dca', '#ca8d9a', '#b9ca8d','#7dc5da', '#97da7d', '#dad17d', '#da827d', '#da7dbf', '#da7d7e' ];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    color.textContent = colors[randomNumber];
    document.body.style.color = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
};
