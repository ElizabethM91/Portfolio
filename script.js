// Grabs button to go to top
let myBtn = document.getElementById("topBtn");

// Function where the user scrolls 20px from top, displays the button
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none";
    }
}

// Function to take user to the top of the page
function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}