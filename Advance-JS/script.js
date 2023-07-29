
var ulist=document.getElementById('expenseList')
var amountField=document.getElementById('amount')
var descField=document.getElementById('description')
var catField=document.getElementById('category')
function add2LocalStorage(amount,desc,cat){
    var x=new Date()
    x=x.getTime();


    var obj=JSON.stringify([amount,desc,cat])

    localStorage.setItem(x,obj)
    
    return x

}
function addWhenRefress(){
    var len=localStorage.length;
    var ar=[]
    for(var i=0;i<len;i++){
        key=localStorage.key(i)
        item=localStorage.getItem(key)
        pr=JSON.parse(item)
        
        addItemtoList(pr[0],pr[1],pr[2],key)
        
    }
}

addWhenRefress();
function addItemtoList(amount,desc,cat,key=null){
    
    var li=document.createElement('li')
    li.className="list-group-item"

    var amoutEl=document.createElement('span')
    amoutEl.className='mr-2'
    amoutEl.textContent='Amount: $'+amount
    
    var descEl=document.createElement('span')
    descEl.className='mr-2'
    descEl.textContent='Description :'+desc;

    var catEl=document.createElement('span')
    catEl.className='mr-2'
    catEl.textContent='Category :'+cat;


    var btnDel=document.createElement('button')
    btnDel.className="btn btn-danger btn-sm"
    btnDel.textContent='Delete'

    var btnEdit=document.createElement('button')
    btnEdit.className='btn btn-info btn-sm'
    btnEdit.textContent='Edit'

    li.appendChild(amoutEl)
    li.appendChild(descEl)
    li.appendChild(catEl)
    li.appendChild(btnDel)
    li.appendChild(btnEdit)
    
    ulist.appendChild(li);

    if(key==null){
        key=add2LocalStorage(amount,desc,cat);
    }
    btnDel.addEventListener('click',function(event){
        ulist.removeChild(li);
        localStorage.removeItem(key)
    })

    btnEdit.addEventListener('click',function(event){
        console.log("HELLO THERE")
        localStorage.removeItem(key)
        ulist.removeChild(li);

        amountField.value=amount;
        descField.value=desc;
        catField.value=cat;
    })
    
}


document.getElementById('addExpense').addEventListener('click',function(event){

    event.preventDefault();
    amount=amountField.value;
    desc=descField.value;
    cat=catField.value;
    

    addItemtoList(amount,desc,cat);
    
    amountField.value=''
    descField.value=''
    catField.value=''
})

