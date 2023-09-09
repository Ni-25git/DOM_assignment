let myForm=document.querySelector("form");
let inpName=document.getElementById("name");
let docId=document.getElementById("docID");
let department=document.getElementById("dept");
let expp=document.getElementById("exp");
let emailId=document.getElementById("email");
let contNum=document.getElementById("mbl");
let tbody=document.querySelector("tbody");

AllTask=[];

myForm.addEventListener("submit",function(e){
    e.preventDefault();

    let  Data=
    {
        input:inpName.value ,
        Id:docId.value ,
        deptSelect:department.value ,
        docExp:expp.value ,
        email:emailId.value ,
        contact:contNum.value 

    }

    AllTask.push(Data)
    console.log(AllTask)
    tbody.innerHTML="";

    AllTask.map((ele)=>{
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");
        let td5=document.createElement("td");
        let td6=document.createElement("td");

        td1.innerText=ele.input;
        td2.innerText=ele.Id;
        td3.innerText=ele.deptSelect;
        td4.innerText=ele.docExp;
        td5.innerText=ele.email;
        td6.innerText=ele.contact;

        tr.append(td1,td2,td3,td4,td5,td6);
    })
    let role;
    if (experience > 5) {
        role = "Senior";
    } else if (experience >= 2 && experience <= 5) {
        role = "Junior";
    } else {
        role = "Trainee";
    }
     let roleCell = document.createElement("td");
     roleCell.innerText = role;
     tr.append(roleCell)
     tbody.append(tr)
})


