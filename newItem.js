const itemContainer = document.getElementById('newItemList'),
 item = document.getElementById('item'),
 appError = document.getElementById('appError')



let newItemsList = []

let count = 0
function addNewItem(newItem, itemText, itemList){
    
    if(!item.value){
       appError.classList.add('.errorContainer')
     let time =  setInterval(() =>{
        count++;
            if(count == 3){
                clearInterval(time)
                count = 0;
                appError.classList.remove('.errorContainer')
                console.log("Remove Error")
            }
            console.log(count)
        }, 1000)
    }else{

        itemList = document.createElement('li')
        newItem  = document.createElement('button')
        newItem.className = "btn-close";
        newItem.style.fontSize = "12px";
        newItemsList.push(item.value)

        itemText = document.createTextNode(item.value)

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
        console.log(item)

    })

}



export default addNewItem


