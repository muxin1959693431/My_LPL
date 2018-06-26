$(document).ready( function() {
    $("#about-btn").addClass('btn btn-primary')
    $("#about-btn1").addClass('btn btn-primary')
    $("likes").addClass('btn btn-primary')
    $("#about-btn").click( function(event) {
        alert("You clicked the button using JQuery!");
    });
    $("#about-btn1").click( function(event) {
        alert("You clicked the button using JQuery!");
    });

    $("#about-btn").click( function(event) {
    msgstr = $("#msg").html()
    msgstr = msgstr + "o"
    $("#msg").html(msgstr)

    });




});


