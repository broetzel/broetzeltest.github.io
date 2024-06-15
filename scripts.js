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
});
