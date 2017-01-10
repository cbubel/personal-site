const HOME_PARTIAL = "home"; // home partial filename
const CONTAINER_ID = "content";

function load() {
    let path = getPath();
    if(path === "" || path === undefined) path = HOME_PARTIAL;

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(CONTAINER_ID).innerHTML = this.responseText;
        }
    };

    xhttp.open("GET", `partials/${path}.html`, true);
    xhttp.send();
}



function getPath() {
    return window.location.href.split("#/")[1];
}

let loadHandler = function(event) {
    event.preventDefault();
    load();
}

window.onhashchange = event => loadHandler(event);

window.onload = event => loadHandler(event);