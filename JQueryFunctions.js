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