// $("h1") means selecting all h1 elements

// assigning color blue to h1
// $("h1").css("color", "blue")

// printing values in console
// console.log("color oh h1 is:" + $("h1").css("color"));
// console.log("color oh h1 is:" + $("h1").css("font-size"));

// it is better to have style in css and content in html and concern in js

// added two classes
$("h1").addClass("big-title  margin-class");

$("button").text("Yo Yo")
$("button").html("<em>Hey</em>")

console.log($("a").attr("href"));
$("a").attr("href", "https://www.youtube.com")
console.log($("a").attr("href"));

console.log($("h1").attr("class"));

// Adding events to JQuery
$("h1").click(function(){
    $("h1").css("background-color", "#ffffff")
});

// for (var i=0; i<5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color="pink"
//     })
// }

// above for code is written great using $
    $("button").click(function(){
        $("h1").css("color", "yellow")
    })


 $("input").keypress(function(events){
     console.log(events.target)
 })   

 $(document).keypress(function(e){
     $("h1").text(e.key)
 })

    // Best option to use on 
 $("h1").on("mouseover", function(){
     $("h1").css("color", "red")
 })
 
 $("h1").on("click", function(){
    $("h1").before("<button>I am a Button!!</button>")
})
// $("h1").on("click", function(){
//     $("h1").after("<button>I am a Button!!</button>")
// })

$("h1").on("click", function(){
    $("h1").append("<button>Added just after h1</button>")
})
// $("h1").on("click", function(){
//     $("h1").prepend("<button>Added just before h1</button>")
// })

//remove all added buttons
// $("button").remove();



// Adding animations

$(".btn").click(function(){
    // $("h1").toggle();  // with this the h1 first gets hide and on clicking back again it comes back
    // $("h1").fadeToggle();   with this the h1 first gets hide(fadeOut) and on clicking back(fadeIn) again it comes back
    // $("h1").slideToggle();  with this the h1 first gets slideup and on clicking back slides down
    // $("h1").animate({opacity: 0.5})  //using animate we can have only values that contain some numeric values
    $("h1").slideUp().slideDown().animate({opacity: 0.5})
})