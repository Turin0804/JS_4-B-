let parent=document.querySelector(".parent");
let child=document.querySelector(".child");



window.addEventListener('scroll',function(){



let height=document.documentElement.scrollHeight;
let clientHeight=document.documentElement.clientHeight;
let fromTop=document.documentElement.scrollTop;

let sub=height-clientHeight;
let result=(fromTop*100)/sub;
let test=Math.round(result);

parent .style .backgroundImage=`conic-gradient(#16a085 ${result}% ,#f1c40f ${result}%)`;
child.innerHTML=test;
})