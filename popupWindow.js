var popupDiv = document.createElement("div");
popupDiv.style.position = "fixed";
popupDiv.style.top = "80px";
popupDiv.style.width = "fit-content";
popupDiv.style.height = "40px";
popupDiv.style.zIndex = "100";
popupDiv.style.backgroundColor = "white";
popupDiv.style.border = "2px solid rgb(206, 206, 206)";
popupDiv.style.borderRadius = "5px";
popupDiv.style.left = "0";
popupDiv.style.right = "0";
popupDiv.style.marginLeft = "auto";
popupDiv.style.marginRight = "auto";
popupDiv.style.boxShadow = "5px 3px 10px rgba(153, 153, 153, 0.5)";
popupDiv.style.transitionDuration = ".7s";
popupDiv.style.transitionTimingFunction = "ease-out";
popupDiv.style.opacity = "0";
popupDiv.style.transitionProperty = "opacity";
document.getElementsByTagName("body")[0].appendChild(popupDiv);
var pop = false;
function popup(content, time) {
    if (!pop) {
        pop = true;
        // popupDiv.style.display = "block";
        popupDiv.innerHTML = `<h5 style="font-size: larger;color: rgb(71, 71, 71, 0.829);margin-top: 5px;margin-left: 10px;margin-right: 10px;">${content}</h5>`;
        popupDiv.style.opacity = "1.0";
        setTimeout(() => {
            popupDiv.style.opacity = "0";
            pop=false;
        }, time ? time : 3000);

    }
}