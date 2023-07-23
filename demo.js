
// var lst=document.getElementsByTagName('li');


// lst[2].style.display="None"

// lst[1].style.backgroundColor='green'


var li=document.querySelectorAll('li')

li[1].style.color='red'

for(i=1;i<li.length;i=i+2){
    li[i].style.backgroundColor='green'
}
