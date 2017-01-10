const HOME_PARTIAL = "home"; // home partial filename
const CONTAINER_ID = "content";

function load() {
    console.log("in load")
    let path = getPath();
    if (path === "" || path === undefined) path = HOME_PARTIAL;

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        console.log("ready state change")
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

function loadHandler(event) {
    console.log("in load handler")
    event.preventDefault();
    load();
}

window.onhashchange = event => loadHandler(event);
window.onload = event => loadHandler(event);