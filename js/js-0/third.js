let Name=prompt("enter the name:")
  let r_name= is_empty(Name);
  let repet_num=prompt("enter number:")
  let r_num = is_empty(repet_num);
  let repeat=parseInt(r_num)
  let i=0
  let ul=document.createElement("ul")
  ul.style.cssText=["list-style-type: circle;"]
    while(i<repeat){
      let li=document.createElement("li")
      li.innerText=`Hello ${Name}`
     ul.appendChild(li)
     document.body.append(ul)
      i++;
    }
    