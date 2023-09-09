let myForm=document.querySelector("form");

myForm.addEventListener("submit",function(e){
    e.preventDefault();

    let name=document.getElementById("name").value;
    let employeeId=document.getElementById("employeeID").value;
    let department=document.getElementById("department").value;
    let experience=document.getElementById("exp").value;
    let email=document.getElementById("email").value;
    let mobile=document.getElementById("mbl").value;

    let role;
            if (experience > 5) {
                role = "Senior";
            } else if (experience >= 2 && experience <= 5) {
                role = "Junior";
            } else {
                role = "Fresher";
            }

            let tbody=document.querySelector("tbody");
            let tr=document.createElement("tr");
            let data=[name,employeeId,department,experience,email,mobile,role];

            data.forEach((ele)=>{
                let td=document.createElement("td");
                td.innerText=ele;
                tr.appendChild(td);
            })

            let deleteTd=document.createElement("td");
            let deleteBtn=document.createElement("button");
            deleteBtn.innerText="Delete";

            deleteBtn.addEventListener("click",function(e){
                e.preventDefault();
                tbody.removeChild(tr);
            })
            deleteTd.appendChild(deleteBtn);
            tr.appendChild(deleteTd)

            tbody.appendChild(tr);
})