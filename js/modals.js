
// Contact Model =================
// Get the modal
var modal = document.getElementById('contactModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Fourth Year Project Modal
// Get the modal
var fourthYearmodal = document.getElementById('fourthYearmodal');

// Get the button that opens the modal
var projectImage = document.getElementById("projectImage");

// Get the <span> element that closes the modal
var closeProject = document.getElementById("closefourthYearModal");

// When the user clicks the button, open the modal 
projectImage.onclick = function() {
    fourthYearmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeProject.onclick = function() {
    fourthYearmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == fourthYearmodal) {
        fourthYearmodal.style.display = "none";
    }
}



/*
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
//var btn = document.getElementById("myBtna");
//var btn = document.getElementById("Projects").getElementById("projectsContainer").getElementById("rowi").getElementById("myBtna");
var btn = document.getElementById("Projects").getElementById("projectsContainer");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

*/


/*
// Get the modal
var yrFourprojectModal = document.getElementById('myModal');

// Get the button that opens the modal
var yrFourProjectImage = document.getElementById("yrFourProjectImage");

// Get the <span> element that closes the modal
//var closeYrFourProject = document.getElementById("closeProjectYr4");
var closeYrFourProject = document.getElementsByClassName("close")[0];


// When the user clicks the button, open the modal 
yrFourProjectImage.onclick = function() {
    yrFourprojectModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeYrFourProject.onclick = function() {
    yrFourprojectModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == yrFourprojectModal) {
        yrFourprojectModal.style.display = "none";
    }
}
*/