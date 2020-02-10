// Lightbox variables
let gallery = document.getElementById("gallery");
let galOvr = gallery.getElementsByClassName("galOvr");
galOvr = Array.from(galOvr);
let modalContent = document.getElementById("modal-content");
let patt = /\s(.*?)\p/g;
let gallImgs = gallery.getElementsByTagName("img");
gallImgs = Array.from(gallImgs);

// Current Lightbox Selection
function result(arg1){
    let str = gallImgs[arg1].getAttribute("src");
    let imgSrc = str.match(patt);
    return imgSrc;
}

// Lightbox display
let modal = document.getElementById("modal");
galOvr.forEach(function(item, index){
    item.addEventListener("click", function(){
        modalContent.setAttribute("src", "images/product" + result(index));
        modal.style.display = "flex";
      });
});
modal.onclick = function() {
    modal.style.display = "none";
}

// V Info dropdown display
let infoDropdownHook = document.getElementsByClassName("info-dropdown-hook");
infoDropdownHook = Array.from(infoDropdownHook);
infoDropdownHook.forEach(function(item, index){
    let onFlag = false;
    let itemTester;
    itemTester = item.children;
    itemTester = Array.from(itemTester);
    //console.log(itemTester[0])
    item.addEventListener("click", function(){
        if(!onFlag){
            itemTester[0].style.display = "block";
            onFlag = true;
        } else {
            itemTester[0].style.display = "none";
            onFlag = false;
        }
    });
});

