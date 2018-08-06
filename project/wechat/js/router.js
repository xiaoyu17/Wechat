


$(function(){

    $(".dynamic").load("we.html");

    //切换
    $(".menu-wei").click(function() {
        $(".dynamic").load($(this).data("page"));
    })
    $(".menu-tong").click(function() {
        $(".dynamic").load($(this).data("page"));
    })

    $(".menu-find").click(function() {
        $(".dynamic").load($(this).data("page"));
    })


    $(".menu-me").click(function() {
        $(".dynamic").load($(this).data("page"));
    })


})