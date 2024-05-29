let x= document.querySelector(".display");

let btn=document.querySelectorAll("button");

console.log(btn);

btn[0].onclick = ()=> { x.value+= btn[0].value; };
btn[1].onclick = ()=> { x.value+= btn[1].value; };
btn[2].onclick = ()=> { x.value+= btn[2].value; };
btn[3].onclick = ()=> { x.value+= btn[3].value; };
btn[4].onclick = ()=> { x.value+= btn[4].value; };
btn[5].onclick = ()=> { x.value+= btn[5].value; };
btn[6].onclick = ()=> { x.value+= btn[6].value; };
btn[7].onclick = ()=> { x.value+= btn[7].value; };
btn[8].onclick = ()=> { x.value+= btn[8].value; };
btn[9].onclick = ()=> { x.value+= btn[9].value; };
btn[10].onclick = ()=> { x.value+= btn[10].value; };
btn[11].onclick = ()=> { x.value+= btn[11].value; };
btn[12].onclick = ()=> { x.value="" };
btn[13].onclick = ()=> { x.value+= btn[13].value; };
btn[14].onclick = ()=> { x.value=eval(x.value) };
btn[15].onclick = ()=> { x.value+= btn[15].value; };



