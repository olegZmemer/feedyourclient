let afternoonFood = ['juice', 'water', 'salt', 'appple', 'pineapple', 'sandwich', 'pizza', 'salad'], // Array with names of food. AFternoon
    morningFood = ['coffee'], // Array with names of food. Night
    man = document.querySelector('.man'), // Hero
    littleWindow = document.querySelector('.small-window'), // Door-window
    bigWindow = document.querySelector('.window'), // Window
    slider = document.querySelector('.slider'); // Slider with food

(function () {
    for (let i = 0; i < afternoonFood.length; i++) {
        let foodElement = document.createElement('div'); // Creating elements of food
        foodElement.className = 'food';
        slider.appendChild(foodElement); // Adding our food-elements to slider
        foodElement.style.backgroundImage = 'url("img/food/' + afternoonFood[i] + '.png")' // Set background-image to food-blocks
    }
})();

(function heroComes() {
    let smallWindow = document.querySelector('.small-window'),
        questionBlock = document.querySelector('.question'),
        agreeButton = document.querySelector('.agree-button'),
        diagreeButton = document.querySelector('.disagree-button');
    smallWindow.style.backgroundImage = 'url("img/little-face.png")'; // Setting a hero's face on the background of small window
    speak('дзинь дзинь дзинь') // 'The sounds of bells'
    agreeButton.addEventListener('click', () => {
        questionBlock.style.display = 'none';
        man.style.display = 'block';
        smallWindow.style.backgroundImage = 'url("img/godscow.jpg")';
        speak('Я очень голоден'); // I am very hungry
        giveTheFood() // Start main function
    });
    diagreeButton.addEventListener('click', () => {
        speak('ну и пошел нахуй, ублюдок'); // 'Fuck you bitch'
        setTimeout(closeTab, 2300) // Run the function which close this tab, because we click on the disagree button
    })
})();

function giveTheFood() {
    let moralBar = document.querySelector('.moral-bar'), // Bar with the value of spirit
        moralSmile = document.querySelector('.moral-icon'), // Icon with smiles
        hungry = 0, // numerical value of hungry
        moral = 0, // numverical value of spirit 
        eatSounds = ['ням ням', 'ням', 'еще'], // Sounds of eat
        hungryBar = document.querySelector('.hungry-bar'); // Bar with the value of hungry
    hungryBar.style.width = '0%'; // Set starting value of width
    moralBar.style.width = '0%'; // Set starting value of width
    let foodElement = document.getElementsByClassName('food');
    for (let n = 0; n < foodElement.length; n++) {
        foodElement[n].addEventListener("click", () => { // When we click on the food it display:none;
            console.log(hungry)
            speak(eatSounds[Math.floor(Math.random() * eatSounds.length)]);
            foodElement[n].style.display = 'none';
            hungry += Math.random().toFixed() * 20 + 10; // Genearating a random number to set hungry after click 
            moral += Math.random().toFixed() * 20 + 10; // Genearating a random number to set moral after click 
            hungryBar.style.width = hungry + '%'; // Set a width
            moralBar.style.width = moral + '%'; // Set a width
            if (moral < 50) {
                moralSmile.style.backgroundImage = 'url("img/panel/sad.png")';
                man.style.backgroundImage = 'url("img/man-sad.png")';
            } else if (moral == 50) {
                moralSmile.style.backgroundImage = 'url("img/panel/surprised.png")';
                man.style.backgroundImage = 'url("img/man-fine.png")';
                speak('Какой балдеж');
            } else if (moral > 50) {
                moralSmile.style.backgroundImage = 'url("img/panel/happy.png")';
                man.style.backgroundImage = 'url("img/man-happy.png")';
            }
        });
    }
};

function closeTab() {
    window.close();
}

function speak(text) {
    let message = new SpeechSynthesisUtterance();
    message.lang = "ru-RU";
    message.text = text;
    window.speechSynthesis.speak(message);
}