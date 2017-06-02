function opentable(element){
    console.log(element.id);
    var table = document.querySelector(".infotab table[for="+element.id+"]");
    var visibleTable = document.querySelector('table.visible');
    if(visibleTable != null)
        {visibleTable.classList.remove("visible");}
    table.classList.add("visible")
}
function openadding() {
    var element = document.querySelector(".overlay.hide");
    element.classList.remove("hide");
    var kalle = document.querySelector(".adding.hide");
    kalle.classList.remove("hide");
    kalle.classList.add("open-adding");

}
function slidebackfunction() {
    var kalle = document.querySelector(".overlay");
    kalle.classList.add("hide");
    var open = document.querySelector(".adding");
    open.classList.remove("open-adding");
    open.classList.add("hide");

}
