function browser(){
    let userAgent = navigator.userAgent;
    let browserName;

    if(userAgent.match(/chrome|chromium|crios/i)){
        browserName = "Chrome";
    }else if(userAgent.match(/firefox|fxios/i)){
        browserName = "Firefox";
    }else if(userAgent.match(/safari/i)){
        browserName = "Safari";
    }else if(userAgent.match(/opr\//i)){
        browserName = "Opera";
    }else if(userAgent.match(/edg/i)){
        browserName = "Edge";
    }else{
        browserName = "No browser detection";
    }

    document.querySelector("h3").innerHTML =
    "Welcome! You are using "+browserName+" Browser";
}

var countDownDate = localStorage.getItem('startDate');
if (countDownDate) {
    countDownDate = new Date(countDownDate);
} else {
    countDownDate = new Date();
    localStorage.setItem('startDate', countDownDate);
}

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = now - countDownDate.getTime();

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = "You have Spent "/*days + "d " + hours + "h " +*/+
    minutes + "m " + seconds + "s " + " on this page";
}, 1000);