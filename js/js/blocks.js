let block_button=document.querySelector(".block-but");
let block_div=document.querySelector(".work-area")
block_button.addEventListener("click",()=>{
    document.querySelector(".box").insertBefore(block_div.cloneNode(false),block_div).style.backgroundColor=`rgb(${Math.floor( Math.random()*256)},${Math.floor( Math.random()*256)},${Math.floor( Math.random()*256)})`
})