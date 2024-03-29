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

$(document).ready(function(){
    // When the button is clicked, open the modal
    $("#openModalBtn").click(function(){
        $("#myModal").css("display", "block");
    });

    // When the close button or outside of the modal is clicked, close the modal
    $(".close, .modal").click(function(event){
        if (event.target === this) {
            $("#myModal").css("display", "none");
        }
    });
});

$(document).ready(function() {
    // Show tooltip on hover
    $("#myTooltip").hover(function() {
        $(this).find(".tooltiptext").css("visibility", "visible").css("opacity", 1 );
    }, function() {
        $(this).find(".tooltiptext").css("visibility", "hidden").css("opacity", 0);
    });
});

$(document).ready(function() {
    // Function to sort the list alphabetically
    function sortList() {
        // Get the list items
        var list = $("#itemList");
        var items = list.children("li").get();
        
        // Sort the items alphabetically
        items.sort(function(a, b) {
            var textA = $(a).text().toUpperCase();
            var textB = $(b).text().toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        
        // Update the list with sorted items
        $.each(items, function(index, item) {
            list.append(item);
        });
    }

    // Add click event listener to the sort button
    $("#sortButton").click(sortList);
});
