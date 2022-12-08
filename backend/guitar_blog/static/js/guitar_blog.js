$(".top-song-button").click(function (e) {
    let data = {
        "username": $(".username").val(),
        "user_id": $(".user_id").val(),
        "button_name": $(".top-song-button").attr("name"),
        "primary_key": $(".primary-key").val(),
        "user_set": $(".user").val(),
        "csrfmiddlewaretoken": $("#top-song-form").serialize().split("=")[1],
    }
    e.preventDefault();
    $.post('/likes/', data,
        function (response) {
            $("#top-song-vote-count").text("Liked " + response["final"]);
            let my_button_text = document.querySelector(".top-button-inside-text");
            let my_button = document.querySelector(".top-song-button");
            my_button.name = response["req_name"];
            my_button_text.innerText = response["inner_text"];
        },
        "json"
    );
    console.log(data);

});

$(".middle-song-button").click(function (e) {
    let data = {
        "username": $(".username").val(),
        "user_id": $(".user_id").val(),
        "button_name": $(".middle-song-button").attr("name"),
        "primary_key": $(".primary-key").val(),
        "user_set": $(".user").val(),
        "csrfmiddlewaretoken": $("#middle-song-form").serialize().split("=")[1],
    }
    e.preventDefault();
    $.post('/likes/', data,
        function (response) {
            $("#middle-song-vote-count").text("Liked " + response["final"]);
            let my_button_text = document.querySelector(".middle-button-inside-text");
            let my_button = document.querySelector(".middle-song-button");
            my_button.name = response["req_name"];
            my_button_text.innerText = response["inner_text"];
        },
        "json"
    );
    console.log(data);

});

$(".bottom-song-button").click(function (e) {
    let data = {
        "username": $(".username").val(),
        "user_id": $(".user_id").val(),
        "button_name": $(".bottom-song-button").attr("name"),
        "primary_key": $(".primary-key").val(),
        "user_set": $(".user").val(),
        "csrfmiddlewaretoken": $("#bottom-song-form").serialize().split("=")[1],
    }
    e.preventDefault();
    $.post('/likes/', data,
        function (response) {
            $("#bottom-song-vote-count").text("Liked " + response["final"]);
            let my_button_text = document.querySelector(".bottom-button-inside-text");
            let my_button = document.querySelector(".bottom-song-button");
            my_button.name = response["req_name"];
            my_button_text.innerText = response["inner_text"];
        },
        "json"
    );
    console.log(data);

});