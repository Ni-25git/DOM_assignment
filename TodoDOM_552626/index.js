let myForm=document.querySelector("form");
let inpTask=document.getElementById("task");
let prioritySelect=document.getElementById("priority");
let tbody = document.querySelector("tbody");

AllTask=[];

myForm.addEventListener("submit",function(e){
    e.preventDefault();
    let Data=
    {
        input: inpTask.value ,
        priority: prioritySelect.value 
    }
    AllTask.push(Data)
    console.log(AllTask)
    
    tbody.innerHTML="";

    AllTask.map((ele)=>
    {
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");

        td1.innerText=ele.input;
        td2.innerText=ele.priority;
        tr.append(td1,td2);
        tbody.append(tr)
         
    })
   
})