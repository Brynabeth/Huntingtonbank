$(document).ready(function() {
    $("button").hover(
        function() {
            $(this).css({
                "transform": "scale(1.1)",
                "transition": "transform 0.1s ease-in-out"
            });
        },
        function() {
            $(this).css({
                "transform": "scale(1)",
                "transition": "transform 0.1s ease-in-out"
            });
        }
    );
    $(".article-card").hover(
        function() {
            $(this).css({
                "transform": "scale(1.1)", 
                "transition": "transform 0.2s ease-in"
            });
        },
        function() {
            $(this).css({
                "transform": "scale(1)",
                "transition": "transform 0.2s ease-in"
            });
        }
    );
    $(".offers-card").hover(
        function() {
            $(this).css({
                "transform": "scale(1.1)",
                "transition": "transform 0.1s ease-in"
            });
        },
        function() {
            $(this).css({
                "transform": "scale(1)",
                "transition": "transform 0.1s ease-in"
            });
        }
    );
});