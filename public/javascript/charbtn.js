$("#playAgainBtn").on("click", function(event) {
    event.preventDefault();
    console.log("I was clicked");
    window.location.href = "/home";
});


$("#startmatchBtn").on("click", function(event) {
    event.preventDefault();
    console.log("Start the match");
    window.location.href = "/home";
});