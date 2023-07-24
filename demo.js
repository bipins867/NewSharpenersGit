
var container=document.querySelector('.container')

var h1=container.children[0]

var div1=document.createElement('div')
div1.className='div'
div1.id='idDiv'

var childText=document.createTextNode('HEllo word')
div1.appendChild(childText)

console.log(div1)


container.insertBefore(div1,h1)


var lst=document.querySelector('.list-group')

var l1=lst.children[0]


var l0=document.createElement('li')
l0.className=l1.className

var textL=document.createTextNode('HEllo world')
l0.appendChild(textL)


lst.insertBefore(l0,l1)