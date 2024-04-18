
$(document).ready(function (event) {

    $("#searchForm").submit(function (event) {
        event.preventDefault();

        let searchData = $("#searchInput").val();

        $.ajax({
            url: "http://universities.hipolabs.com/search",
            method: "GET",
            data: { name: searchData },
            success: function (response) {
                displayDatafunc(response);
            },
            error: function (xhr, status, error) {

            }
        });
    });

});
function displayDatafunc(response) {

    $.each(response, function (index, university) {
        let heading = $("<h2>").text(university.name);

        let country = $("<p>").text(university.country);

        let link = $("<a>").attr("href", university.web_pages[0]).text("view page");

        $("#DisplayData").append(heading, country, link);
    });
}
