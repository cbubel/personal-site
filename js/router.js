const HOME_PARTIAL = "home"; // home partial filename

function load() {
    let path = getPath();
    if(path === "" || path === undefined) path = HOME_PARTIAL;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("content").innerHTML =
        this.responseText;
        }
    };
    xhttp.open("GET", `partials/${path}.html`, true);
    xhttp.send();
};

function getPath() {
    return window.location.href.split("#/")[1];
};

window.onhashchange = function(event) {
    event.preventDefault();
    load();
};

window.onload = function(event) {
    event.preventDefault();
    load();
};