// Navbar Scrooling
// Add scrollspy to <body>
$('body').scrollspy({target: ".navbar", offset: 50});

// Add smooth scrolling on all links inside the navbar
$("#myNavbar a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } // End if

})




//===========================
// Education results handlers

function collapseResultPanel() {
        $("#thirdYrResults").collapse("hide");
        $("#secondYrResults").collapse("hide");
        $("#firstYrResults").collapse("hide");
};

function collapseHandler(divId) {
    
    if(divId == "fourthYrResults") {
        
        $("#" + divId).collapse("show");
        $("#thirdYrResults").collapse("hide");
        $("#secondYrResults").collapse("hide");
        $("#firstYrResults").collapse("hide");
    }
    else if(divId == "thirdYrResults") {
        
        $("#" + divId).collapse("show");
        $("#fourthYrResults").collapse("hide");
        $("#secondYrResults").collapse("hide");
        $("#firstYrResults").collapse("hide");
    }
    else if(divId == "secondYrResults") {
        
        $("#" + divId).collapse("show");
        $("#fourthYrResults").collapse("hide");
        $("#thirdYrResults").collapse("hide");
        $("#firstYrResults").collapse("hide");
    }
    else if(divId == "firstYrResults") {
        
        $("#" + divId).collapse("show");
        $("#fourthYrResults").collapse("hide");
        $("#thirdYrResults").collapse("hide");
        $("#secondYrResults").collapse("hide");
    }
};


function modalHandler(modal) {
    $(modal).modal('show');

   // $(divId).style.display("block");
};





