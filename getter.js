var httpRequest = new XMLHttpRequest();
function loadPage(url, callback) {
    httpRequest.open('GET', url, true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            callback(httpRequest.responseText);
        }else{
            callback(null);
        }
    };
}