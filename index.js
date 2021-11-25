const addListContainer = document.getElementById('todo_text')
const addList = document.getElementById('add_btn')


//click the add button
addList.addEventListener('click',function (){
    if(addListContainer.value.trim() != 0){ //.. where to input todo list is empty, dont add
        storedItems = JSON.parse(localStorage.getItem('localStorageItem'))

        if(storedItems === null){ //if localstorage is empty, the array shoulg be empty too until something is added
            myArrayList = []
        }
        else{
            myArrayList = storedItems
        }
        myArrayList.push(addListContainer.value)//push whatever is added to the container to local storage and stringify it
        localStorage.setItem('localStorageItem',JSON.stringify(myArrayList))
     
    }
   
   displayList()// calling the displayList() function
   })


//displaying the lists entered
    function displayList(){

        let shown = ''
        let todoListShow = document.querySelector('.lists')  
        let storedItems = JSON.parse(localStorage.getItem('localStorageItem'))

        if(storedItems === null){
            myArrayList = []
        }
        else{
            myArrayList = storedItems
        }
        myArrayList.forEach((listData,deleteData) =>{//for each listData you pass into the array
            shown += `
            
            <li>${listData}<span>
            <i class='bx bxs-trash-alt' style='color:#e20c0c' 
            onclick="deleteLists(${deleteData})">
            </i>
            </span></li>
          
            `
        })
        todoListShow.innerHTML = shown //display the list in the browser
        addListContainer.value = "" //the container should return empty for entering of new list
        
    }
    displayList()
   
    //click the delete button
    function deleteLists(deleteData){
        let storedItems = JSON.parse(localStorage.getItem('localStorageItem'))
        myArrayList.splice(deleteData,1)//delete list one after the other
        localStorage.setItem('localStorageItem',JSON.stringify(myArrayList))
        displayList()
    }


    function clearAll(){
       localStorage.clear()
       displayList()
    }
  
