$(document).ready(function(){
    $(".db-options a").click(function(ev){
        var $target = $(ev.currentTarget);
        $.ajax("/connection", {
            type: "POST",
            data: {"selected_db": $target.html()}
        }).then(function(result) {
            $(".main-section").html(result)
        });
    });

    $(".main-section").on("click", "#connect", function(ev){
        debugger
        ev.preventDefault();
        var db = $("#database").val();
        $.ajax({
            url: "/connect/" + db,
            type: "post",
            data: {
                host: $("#host").val(),
                user: $("#user").val(),
                passwd: $("#passwd").val(),
            },
            success: function(response){
                debugger
            },
            error: function(error) {
                debugger
            }
        }).then(function(result) {
            $(".main-section").html(result)
        });
    })
});