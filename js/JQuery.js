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


// Shows alert box when message is sent in contact modal */
$(document).ready(function(){
    $('#sendMessageBtn').click(function(){
        $('.alert').show()
    }) 
});