$(window).resize(function() {
    $("#main").height($(window).height() - $("header").outerHeight(true) - $("footer").outerHeight(true));
});

$(document).ready(function() {
    //初始化
    $("#main").height($(window).height() - $("header").outerHeight(true) - $("footer").outerHeight(true));
});