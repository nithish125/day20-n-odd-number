
var x=prompt("enter the number")
for(i=0;i<x;i++){
    if(i%2 == 0){
        document.getElementById("odd").innerText=document.getElementById("odd").innerText+i;
        console.log(i);
    }
}
e1=document.createElement("div");
e2=document.createElement("span");
e1.appendchild(e2);
e2.appendchild(e1)
document.getElementById("odd").innerText=document.getElementById("odd").innerText+i;