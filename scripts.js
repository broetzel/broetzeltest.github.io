function openTab(evt, tabName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

// Open the default tab by default
document.addEventListener("DOMContentLoaded", function() {
    openTab(null, 'CreativeDemandGeneration');
    
    // Set the default image for Uno button
    document.querySelector('.uno-button img').src = "https://i.imgur.com/LpOuUoA.png";
});

// Function to change images and switch tab when Uno button is pressed
function unoButtonPressed() {
    // Change the image of Uno button
    document.querySelector('.uno-button img').src = "https://i.imgur.com/LpOuUoA.png";
    // Change the image of Dos button
    document.querySelector('.dos-button img').src = "https://i.imgur.com/n0nJ0Uv.png";
    // Change the image of Tres button
    document.querySelector('.tres-button img').src = "https://i.imgur.com/RvwhXfc.png";
    // Switch to the CreativeDemandGeneration tab
    openTab(null, 'CreativeDemandGeneration');
}

// Add event listener to Uno button
document.querySelector('.uno-button').addEventListener('click', unoButtonPressed);

// Function to change images and switch tab when Dos button is pressed
function dosButtonPressed() {
    // Change the image of Dos button
    document.querySelector('.dos-button img').src = "https://i.imgur.com/rPkVScg.png";
    // Change the image of Uno button
    document.querySelector('.uno-button img').src = "https://i.imgur.com/yrdsbUV.png";
    // Change the image of Tres button
    document.querySelector('.tres-button img').src = "https://i.imgur.com/RvwhXfc.png";
    // Switch to the MarketingProjectManagement tab
    openTab(null, 'MarketingProjectManagement');
}

// Add event listener to Dos button
document.querySelector('.dos-button').addEventListener('click', dosButtonPressed);

// Function to change images and switch tab when Tres button is pressed
function tresButtonPressed() {
    // Change the image of Tres button
    document.querySelector('.tres-button img').src = "https://i.imgur.com/lQyh44c.png";
    // Change the image of Uno button
    document.querySelector('.uno-button img').src = "https://i.imgur.com/yrdsbUV.png";
    // Change the image of Dos button
    document.querySelector('.dos-button img').src = "https://i.imgur.com/n0nJ0Uv.png";
    // Switch to the SalesBrandTraining tab
    openTab(null, 'SalesBrandTraining');
}

// Add event listener to Tres button
document.querySelector('.tres-button').addEventListener('click', tresButtonPressed);
