$(document).ready(function () {
    $("#toggleBtn").click(function () {
        $("#togglePara").toggle();
    });
});

// <!-- task 1 completed till now -->

$(document).ready(function(){
    $("#msgBtn").click(function(){
        $("#msgPara").text("Here is a msg for you!");
    });
});

// <!-- task 2 completed till now -->

$(document).ready(function(){
    $("#colorBtn").click(function(){
        $("#colorPara").css("background-color", "red");
    })
});

// <!-- task 3 completed till now -->

$(document).ready(function(){
    $("#submitt").click(function(event){

        let email = $("#email").val();
        let password = $("#password").val();
        

        if (email == "" || password == "") {
            alert("Please fill all fields");
            event.preventDefault();
        }
    });
});

// <!-- task 4 completed till now -->

$(document).ready(function(){
    $("#addClassDiv").hover(function(){
        $(this).addClass("addClassDiv");
    });
});


