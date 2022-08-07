const itemContainer = document.getElementById('newItemList')
const item = document.getElementById('item')


let newItemsList = []


function addNewItem(newItem, itemText, itemList){
    
    if(!item.value){

        alert('Please enter a value.')
    }else{

        itemList = document.createElement('li')
        newItem  = document.createElement('i')
        newItem.className = "fas fa-trash";
        newItemsList.push(item.value)

        itemText = document.createElement('p')
        itemText.textContent = item.value;

        localStorage.setItem('tasks', JSON.stringify(newItemsList))

        itemContainer.appendChild(itemList)
    
        itemList.append(itemText , newItem)
    
        item.value = '';
    }

    removeItem(newItem , itemList)


    

}

function removeItem(item,itemList){

    item.addEventListener('click', () =>{

        itemList.remove(this)

    })

}



export default addNewItem


