$("img").mouseenter(function(){
    let newelment=document.createElement("img")
  newelment.src=$(this).attr('src')
 $(".display").append(newelment)
  });
  $("img").mouseleave(()=>{
    $(".display").empty();
  })
  $("img").mousemove((event)=>{
    let left_poss=event.pageX+10;
    let top_poss=event.pageY+10;
    $(".display").css({
        "left":`${left_poss}px`,
        "top":`${top_poss}px`
    })
  })