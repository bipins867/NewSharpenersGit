

var list=document.getElementById('list')

var tname=document.getElementById('Name')
var temail=document.getElementById('Email')
var tnum=document.getElementById('Phone')

function refressPage(){
    axios.get('https://crudcrud.com/api/762290126a6f4fabaca3800ead333e7b/Appoinments')
    .then(values=>{
        console.log(values.data)
        for(var idx in values.data){
            
            addElement(values.data[idx])
        }
    })
    .catch(error=>console.log(error))
}
refressPage()
function addElement(data){
    
    const id=data.id
    var name=data.name;
    var email=data.email;
    var number=data.num
    var li=document.createElement('li')

    var text=document.createTextNode(name+'|'+email+'|'+number)
    var btn=document.createElement('button')
    btn.textContent='Delete'

    var editButton=document.createElement('button')
    editButton.textContent='Edit'

    li.id=email;
    li.appendChild(text)
    li.appendChild(editButton)
    li.appendChild(btn)
    
    list.appendChild(li);
    btn.addEventListener('click',function(event){
        //localStorage.removeItem(li.id);
        list.removeChild(li)
    })

    editButton.addEventListener('click',function(event){
        data=JSON.parse(localStorage.getItem(li.id))
        //localStorage.removeItem(li.id)
        tname.value=data.name;
        temail.value=data.email;
        tnum.value=data.num
        list.removeChild(li)
    })
    tname.value=''
    temail.value=''
    tnum.value=''
}

function saveToCloud(name,email,num,callback){
  var obj={
    name:name,
    email:email,
    num:num
  }

  axios.post('https://crudcrud.com/api/762290126a6f4fabaca3800ead333e7b/Appoinments',obj)
  .then(values=>{
    callback(values.data)
  })
  .catch(error=>console.log(error))
}

function clickme(){
    var name=document.getElementById('Name').value;
    var email=document.getElementById('Email').value;
    var num=document.getElementById('Phone').value;
    
    

    
    var dic={
      name:name,
      email:email,
      num:num,
    }

    
    //localStorage.setItem(email,JSON.stringify(dic))
    saveToCloud(name,email,num,addElement)
    
    
}
