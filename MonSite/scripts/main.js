let myHeading = document.querySelector('h1');
myHeading.textContent = 'Bonjour, monde !';

// changer l'image 
let myImage = document.querySelector('img');
myImage.addEventListener('click',function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src','images/firefox2.png');
    }else{
        myImage.setAttribute('src','images/firefox-icon.png');
    }
});

// manipulation du button
let myButton = document.querySelector('button');
//let myHeading = document.querySelector('h1');
function setUserName(){
    // localStorage : permet de stoker des donnees dans le navigateur
    // setItem : permet de stocker des données dans une conteneur
    let myName = prompt('Veuillez saisir votre nom')
    localStorage.setItem('nom',myName);
    myHeading.textContent='Mozilla est cool, '+myName;
    
    if(!localStorage.getItem('nom')){
        setUserName();
    }else{
        let storedName = localStorage.getItem('nom');
        myHeading.textContent ='Mozilla est cool, '+storedName;
    }
}
    myButton.addEventListener('click',function(){
        setUserName();
    });