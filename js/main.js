function opentable(element){
    console.log(element.id);
    var table = document.querySelector(".infotab table[for="+element.id+"]");
    var visibleTable = document.querySelector('table.visible');
    if(visibleTable != null)
        {visibleTable.classList.remove("visible");}
    table.classList.add("visible")

    //var element = document.querySelector()
    //element.classlist.remove()
    //element.classList.add()
}
