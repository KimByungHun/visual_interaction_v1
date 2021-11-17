var pageBtn = $("#visual .page-btns div");
var sideBtn = $("#visual .side-btns div");



pageBtn.on("click", function(){
    var index = $(this).index();
    var slider = $(this).parent().parent();
    var current = slider.find(".slider .active");
    var post = slider.find(".slider article").eq(index);


    
    $(this).addClass("active");
    $(this).siblings(".active").removeClass("active");

    current.removeClass("active");
    post.addClass("active");


    var background = $(this).closest("#visual").find(".slider");

    background.css({ backgroundImage : "url(./img/visual/pic"+(index+1)+".jpg)"});



});



sideBtn.on("click", function(){
    var slider = $(this).closest("#visual");
    var index = $(this).index();
    var isLeft = index == 0;
    var current = slider.find(".page-btns div.active");
    var post;


    if(isLeft){
        post = current.prev();
    }else{
        post = current.next();
    };

    if(post.length == 0){
        if(isLeft){
            post = slider.find(".page-btns div:last-child");
        }else{
            post = slider.find(".page-btns div:first-child");
        }
    };

    post.click();
});



var btnPause = $("#visual .play-btns .btnPause");
var btnPlay = $("#visual .play-btns .btnPlay");


btnPlay.on("click", function(e){
    e.preventDefault(); 

    timer = setInterval(function(){
        $("#visual .side-btns div ").eq(1).click();
    },2000);

    $(".btnPause").removeClass("on"); 
    $(".btnPlay").addClass("on");
});

btnPause.on("click", function(e){
    e.preventDefault(); 
    clearInterval(timer); 

    $(".btnPlay").removeClass("on"); 
    $(".btnPause").addClass("on");
});