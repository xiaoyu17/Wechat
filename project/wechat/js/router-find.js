
$(function(){

    $(".dynamic").load("find.html");

    //切换
    $(".tong-item-circle").click(function() {
        $(".title").load($(this).data("page"));
        $(".dynamic").load($(this).data("page"));




    })



})