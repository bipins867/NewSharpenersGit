var addForm=document.getElementById('addForm')
var lists=document.getElementById('items')


addForm.addEventListener('submit',function(event){
    event.preventDefault();
    var text=document.getElementById('item').value
    
     var lie=document.createElement('li')
     lie.className='list-group-item'


     lie.appendChild(document.createTextNode(text));

     var button=document.createElement('button')
     button.textContent='X'
     button.className='btn btn-danger btn-sm float-right delete'

     var editButton=document.createElement('button')
     editButton.textContent='Edit'
     editButton.className='btn btn-sm float-right edit'

     

     lie.appendChild(button)
     lie.appendChild(editButton)

     lists.appendChild(lie);

    button.addEventListener('click',function(event){
        if(confirm("Are you sure?")){
            lists.removeChild(lie);
        }
    })
     
})


