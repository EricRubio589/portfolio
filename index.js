
function listenForClickOnMenuIcon() {
    var x = document.getElementById("myTopnav");
    $(".menuIcon").click(function () {
        console.log('menu icon clicked');
        if (x.className === "navigationMobile") {
        x.className += " responsive";
        } else {
        x.className = "navigationMobile";
        } 
     });
}  

listenForClickOnMenuIcon();