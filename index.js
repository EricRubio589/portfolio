
function listenForClickOnMenuIcon() {
    var x = document.getElementById("myTopnav");
    $(".menuIcon").click(function () {
        console.log('menu icon clicked');
        if (x.className === "navigationMobiles") {
        x.className += " responsive"; 
     }
    });
}  

listenForClickOnMenuIcon();