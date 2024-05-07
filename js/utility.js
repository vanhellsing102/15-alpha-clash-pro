


function addBgColor(elementID){
    const addBgColor = document.getElementById(elementID);
    addBgColor.classList.add('bg-amber-500');
}
function removeBgColor(elementID){
    const removeBgColor = document.getElementById(elementID);
    removeBgColor.classList.remove('bg-amber-500');
};



function gameLoop(){
    // create a alphabet *****************************
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split('');

    // create a random number under 25****************
    const indexNumber = Math.round(Math.random()*25);

    // console.log(alphabets,indexNumber);
    const alphabet = alphabets[indexNumber];

    return alphabet;
};


function hiddenElement(id){
    const home = document.getElementById(id);
    home.classList.add('hidden');
    // option*******************
    // home.style.display = 'none';
}
function showElement(id){
    const playGround = document.getElementById(id);
    playGround.classList.remove('hidden');
    // option*********************
    // playGround.style.display = 'block';
}



