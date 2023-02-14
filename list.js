function add(){
    var test = document.querySelector("#newtask input")
    var elias = document.querySelector("#newtask input").value
    var task = document.querySelector("#task2")
    var task1 = document.querySelector("#task3")

    if(test.value.length == 0){
        alert("Please Enter a Task")
    }


    else{
        task.innerHTML += elias 
    
}


}


function trash(){

    var  test = document.querySelector("#task2").textContent = " "
                 return test

}