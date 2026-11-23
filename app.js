const ID = document.querySelector("#Employeeid");
const Name = document.querySelector("#name");
const Age = document.querySelector("#age");
const Salary = document.querySelector("#Salary");
const Role = document.querySelector("#role");
const gender = document.querySelector("#gen");
const Form = document.querySelector(".form");
const button = document.querySelector("#btn")
const Table = document.querySelector("#tbody");
 let currentRow = null;
 Form.addEventListener("submit",(event)=>{
    event.preventDefault();
     console.log("click ho gaya h ")

 let tr = document.createElement("tr")
 if(currentRow){
    currentRow[0].textContent=ID.value 
    currentRow[1].textContent=Name.value
    currentRow[2].textContent=Age.value
    currentRow[3].textContent=Salary.value
    currentRow[4].textContent=Role.value
    currentRow[5].textContent=gender.value
    currentRow=null;
    btn.textContent= "Add Employee"
 }
 else{
     tr.innerHTML =
      `<td>${ID.value}</td>
     <td>${Name.value}</td>
     <td>${Age.value}</td>
     <td>${Salary.value}</td>
     <td>${Role.value}</td>
     <td>${gender.value}</td>
     <td>
     <button class="ebtn"> Edit</button>
     <button class="dbtn"> Delet</button>
     </td>`
 
 Table.append(tr);
 }
 Form.reset();
  })

Table.addEventListener("click" ,(event)=>{
    if(event.target.classList.contains("dbtn")){
        event.target.closest("tr").remove();
        // console.log("delet")
    }

    if(event.target.classList.contains("ebtn")){
        const cell = event.target.closest("tr")
        currentRow= cell.children

        ID.value = currentRow[0].textContent;
        Name.value= currentRow[1].textContent;
        Age.value = currentRow[2].textContent;
        Salary.value = currentRow[3].textContent;
        Role.value = currentRow[4].textContent
        gender.value = currentRow[5].textContent
      
        
   
    }
 button.textContent = "Update Employee";
})