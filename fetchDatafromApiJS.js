function fetchData(){
    $(document).ready(function(event){
        event.preventDefault();

        let searchData = $("#searchInput").val();
        
        $.ajax({
            url:"http://universities.hipolabs.com/search",
            method: "GET",
            data:{name, searchData},
            success: function(response){
                displayDatafunc(response);
            },
            error: function(xhr, status, error){
                
            }
        });

    });
}


