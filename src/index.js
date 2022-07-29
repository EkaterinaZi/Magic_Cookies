const radioBtns = document.querySelectorAll('input[type=radio]');
const bodyStyle = document.querySelector('body');
const radioBlackBtn = document.querySelector('.theme__button.black');
const radioWhiteBtn = document.querySelector('.theme__button.white');
const labelBlackBtn = document.querySelector('.radio-black');
const labelWhiteBtn = document.querySelector('.radio-white');

radioBtns.forEach(radioBtn => radioBtn.addEventListener('change', changeTheme));

function changeTheme(event) {
    let item = event.target.value;

    if(item === 'white'){
        bodyStyle.style.backgroundColor = '#ffffff';
        labelWhiteBtn.style.backgroundColor = '#ffffff';
        labelBlackBtn.style.backgroundColor = '#77450B';
        radioBlackBtn.classList.add('changeLeft');
        radioWhiteBtn.classList.add('changeRight');
    } else{
        bodyStyle.style.backgroundColor = '#1e1405';
        labelBlackBtn.style.backgroundColor = 'rgba(74, 42, 5)';
        labelWhiteBtn.style.backgroundColor = '#BC8D5B';
        radioBlackBtn.classList.remove('changeLeft');
        radioWhiteBtn.classList.remove('changeRight');
        
       
    }
}
