/* FAQ */

document.querySelectorAll('.question').forEach(function(question) {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const img = this.querySelector('img');

        const isVisible = answer.classList.contains('show');


        document.querySelectorAll('.answer').forEach(function(answer) {
            answer.style.height = '0'; 
            answer.classList.remove('show');
        });

        document.querySelectorAll('.question img').forEach(function(img) {
            img.style.transform = 'rotate(0deg)';
        });

        if (!isVisible) {
            answer.classList.add('show');
            const fullHeight = answer.scrollHeight + 'px';
            answer.style.height = fullHeight; 
            img.style.transform = 'rotate(180deg)';
        }
    });
});

/* POP UP */

const searchIcon = document.getElementById('icon');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
const closePopup = document.getElementById('closePopup');

const hiddenImage = document.querySelector('.last-image-container .hidden');

searchIcon.addEventListener('click', function() {
    popupImage.src = hiddenImage.src;
    popup.classList.remove('hidden'); 
});

closePopup.addEventListener('click', function() {
    popup.classList.add('hidden');
});


/* INGREDIENTS CARROUSEL */

document.addEventListener('DOMContentLoaded', () => {
    const ingredients = document.querySelectorAll('.ingredients');
    const indicators = document.querySelectorAll('.indicator');
    let index = 0;

    function showIngredients() {
        ingredients.forEach(ingredient => ingredient.classList.remove('visible'));

        for (let i = index; i < index + 4; i++) {
            ingredients[i % ingredients.length].classList.add('visible');
        }

        indicators.forEach(indicator => indicator.classList.remove('active1'));
        indicators[index / 4].classList.add('active1'); 

        index = (index + 4) % ingredients.length;
    }

    showIngredients();

    setInterval(showIngredients, 5000);
});


/* SCROLL TO REVIEWS OR FAQ */

document.addEventListener('DOMContentLoaded', () => {
    const viewReviewsElements = document.querySelectorAll('.view-reviews');
    const viewFaqsElements = document.querySelectorAll('.view-faqs');
    const reviewsContainer = document.getElementById('reviews-container');
    const faqContainer = document.getElementById('faq-container');

    viewReviewsElements.forEach(viewReview => {
        viewReview.addEventListener('click', () => {
            reviewsContainer.scrollIntoView({ behavior: 'smooth' });
        });
    });

    viewFaqsElements.forEach(viewFaq => {
        viewFaq.addEventListener('click', () => {
            faqContainer.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

/* SCROLL TO PRODUCT 1ST */

document.getElementById("order-button").addEventListener("click", function () {
    const targetContainer = document.getElementById("first-product-container");
    targetContainer.scrollIntoView({ behavior: "smooth", block: "start" });
});

/* NOTIFICATIONS */

const names = ["James", "Emma", "William", "Olivia", "Benjamin", "Sophia", "Elijah", "Ava", "Lucas", "Isabella"];
const bottleQuantities = [3, 6];
const times = [12, 3, 4, 6, 15, 9, 12, 7, 17, 10];
let notificationCount = 0; 

function updateNotification() {
    const nameElement = document.getElementById("name");
    const bottleQuantityElement = document.getElementById("bottle-quantity");
    const timeElement = document.getElementById("time");
    const imageElement = document.getElementById("image-purchase");
    const purchaseElement = document.getElementById("purchase");

    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomBottleQuantity = bottleQuantities[Math.floor(Math.random() * bottleQuantities.length)];
    const randomTime = times[Math.floor(Math.random() * times.length)];

    nameElement.textContent = randomName;
    bottleQuantityElement.textContent = `${randomBottleQuantity} bottles`;
    timeElement.textContent = `${randomTime} mins ago`;

    if (randomBottleQuantity === 3) {
        imageElement.src = "img/3.png";
    } else if (randomBottleQuantity === 6) {
        imageElement.src = "img/5.png";
    }

    purchaseElement.classList.remove("fadeOut");
    purchaseElement.classList.add("animate__animated", "animate__fadeIn");
    purchaseElement.style.display = "flex";

    setTimeout(() => {
        purchaseElement.classList.remove("animate__fadeIn");
        purchaseElement.classList.add("animate__fadeOut");

        setTimeout(() => {
            purchaseElement.style.display = "none";
            purchaseElement.classList.remove("animate__fadeOut");
        }, 500); 
    }, 10000);

    notificationCount++; 

    if (notificationCount < 10) {
        setTimeout(() => {
            updateNotification();
        }, 24000);
    }
}



/* FIRST EXIT POP UP */

let exitCount = 0;
let timerInterval;
let firstPopupOpen = false;

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("mouseleave", (event) => {
        if (event.clientY < 10 && !firstPopupOpen && exitCount === 0) {
            exitCount++;
            showExitPopup("first-exit-popup");
            startTimer();
            firstPopupOpen = true;
        }
    });

    document.getElementById("closePopup1").addEventListener("click", () => {
        closeExitPopup("first-exit-popup");
        firstPopupOpen = false; 
        clearInterval(timerInterval);
    });

    document.getElementById("stay-tuned").addEventListener("click", () => {
        closeExitPopup("first-exit-popup");
        firstPopupOpen = false; 
        clearInterval(timerInterval);
    });
});

function showExitPopup(popupId) {
    const exitPopup = document.getElementById(popupId);
    if (exitPopup) {
        exitPopup.style.display = "flex";
    }
}

function closeExitPopup(popupId) {
    const exitPopup = document.getElementById(popupId);
    if (exitPopup) {
        exitPopup.style.display = "none";
    }
}

function startTimer() {
    let timeRemaining = 119;
    const timerElement = document.getElementById("first-popup-timer");

    timerInterval = setInterval(() => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;

        timerElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        timeRemaining--;

        if (timeRemaining < 0) {
            clearInterval(timerInterval);
            timerElement.textContent = "0:00"; 
        }
    }, 1000);
}

/* TODAY */

document.addEventListener("DOMContentLoaded", () => {
    const todayElement = document.getElementById("today");
    const today = new Date();

    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const day = String(today.getDate()).padStart(2, '0'); 
    const year = today.getFullYear(); 

    todayElement.textContent = `${month}-${day}-${year}`; 
});




/* VIDEO */

document.addEventListener("DOMContentLoaded", function() {
    /* CHANGE THE VALUE 10 TO THE SECONDS AT WHICH THE SECTIONS WILL APPEAR */
    var SECONDS_TO_DISPLAY = 1577;
    var CLASS_TO_DISPLAY = ".hide";
    
    /* NO CHANGES NEEDED BELOW THIS POINT */
    var attempts = 0;
    var elsHiddenList = [];
    var elsDisplayed = false;
    var elsHidden = document.querySelectorAll(CLASS_TO_DISPLAY);
    var alreadyDisplayedKey =`alreadyElsDisplayed${SECONDS_TO_DISPLAY}`
    var alreadyElsDisplayed = localStorage.getItem(alreadyDisplayedKey);
    
    setTimeout(function () { elsHiddenList = Array.prototype.slice.call(elsHidden); }, 0);
    
    var showHiddenElements = function () {
    elsDisplayed = true;
    elsHiddenList.forEach((e) => e.classList.remove("hide"));
    localStorage.setItem(alreadyDisplayedKey, true);
    var title = document.getElementById("pulse-animtation");
    if (title) {
        title.classList.add("pulse-animation");
    }
    updateNotification(); 
}
    
    var startWatchVideoProgress = function () {
    if (typeof smartplayer === 'undefined' || !(smartplayer.instances && smartplayer.instances.length)) {
    if (attempts >= 10) return;
    attempts += 1;
    return setTimeout(function () { startWatchVideoProgress() }, 1000);
    }
    
    smartplayer.instances[0].on('timeupdate', () => {
    if (elsDisplayed || smartplayer.instances[0].smartAutoPlay) return;
    if (smartplayer.instances[0].video.currentTime < SECONDS_TO_DISPLAY) return;
    showHiddenElements();
    })
    }
    
    if (alreadyElsDisplayed === 'true') {
    setTimeout(function () { showHiddenElements(); }, 100);
    } else {
    startWatchVideoProgress()
    }
    });