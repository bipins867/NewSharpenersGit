var form=document.getElementById('form')
var list=document.getElementById('list')
var sum=0;

function addItems2List(data){
    var id=data._id
    var productName=data.productName
    var productPrice=data.productPrice
    
    var status=document.getElementById('status')
    var li=document.createElement('li')

    var text=document.createTextNode(productName+'|Rs. '+productPrice)

    var deleteBtn=document.createElement('button')
    deleteBtn.textContent='Delete'

    deleteBtn.addEventListener('click',(event)=>{
        list.removeChild(li)
        deleteFromCloud(id)
        
        sum-=parseInt(productPrice)
        status.innerHTML=sum
    })

    li.appendChild(text)
    li.appendChild(deleteBtn)
    sum+=parseInt(productPrice)
    list.appendChild(li)

    status.innerHTML=sum

    

}

window.addEventListener('DOMContentLoaded',(event)=>{
    getFromCloud()
})

function saveToCloud(productName,productPrice){
    var obj={
        productName:productName,
        productPrice:productPrice
    }
    axios.post('https://crudcrud.com/api/10529450e2154a8f9d308c31e9fe37ed/Products',obj)
    .then((result) => {
        
        addItems2List(result.data)
    }).catch((err) => {
        console.log(err)
    });
}

function deleteFromCloud(id){
    axios.delete(`https://crudcrud.com/api/10529450e2154a8f9d308c31e9fe37ed/Products/${id}`)
    .then((result) => {
        
        console.log(result)
    }).catch((err) => {
        console.log(err)
    });
}

function getFromCloud(){
    axios.get('https://crudcrud.com/api/10529450e2154a8f9d308c31e9fe37ed/Products')
    .then((result) => {
        data=result.data
        for(var id in data){
            addItems2List(data[id])
        }
    }).catch((err) => {
        console.log(err)
    });
}


form.addEventListener('submit',(event)=>{
    event.preventDefault();
    var productName=form.productName.value;
    var productPrice=form.productPrice.value;
    console.log(productName+' '+productPrice)
    
    saveToCloud(productName,productPrice)

    form.productName.value=''
    form.productPrice.value=''
})