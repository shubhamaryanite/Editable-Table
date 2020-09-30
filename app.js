//adding new entry
var rIndex,table=document.getElementById("table");

//check the empty input and valid input while adding or editing row
function checkInput()
{
    var isEmpty=false,
    fname=document.getElementById("fname").value,
    lname=document.getElementById("lname").value,
    employee_id=document.getElementById("employee_id").value,
    contact_no=document.getElementById("contact_no").value;

    if(fname=="")
    {
        alert("First Name cannot be Empty");
        isEmpty=true;
    }
    else if(lname=="")
    {
        alert("Last Name cannot be Empty");
        isEmpty=true;
    }
    else if(employee_id=="")
    {
        alert("Employee ID cannot be Empty");
        isEmpty=true;
    }
    else if(contact_no=="")
    {
        alert("Contact Number cannot be Empty");
        isEmpty=true;
    }

    return isEmpty;
}


function addnewRow()
{
    // get the table by id
    // create a new row and cells
    // get value from input text
    // set the values into row cell's
    if(!checkInput())
    {
        var newRow=table.insertRow(table.length),
        cell1=newRow.insertCell(0),
        cell2=newRow.insertCell(1),
        cell3=newRow.insertCell(2),
        cell4=newRow.insertCell(3),
        fname=document.getElementById("fname").value,
        lname=document.getElementById("lname").value,
        employee_id=document.getElementById("employee_id").value,
        contact_no=document.getElementById("contact_no").value;
        
        cell1.innerHTML=fname;
        cell2.innerHTML=lname;
        cell3.innerHTML=employee_id;
        cell4.innerHTML=contact_no;

        // call the function to set the event to the new row
        selectedRowToInput();
    }
}

//calling eventlistener when the click function is being performed
document.getElementById("addrow").addEventListener("click",addnewRow);


//display selected row dara into input text

function selectedRowToInput()
{
    
    for(var i=1;i<table.rows.length;i++)
    {
        table.rows[i].onclick=function()
        {
            rIndex=this.rowIndex;
            //to take index of row
            //console.log(rIndex);
            document.getElementById("fname").value=this.cells[0].innerHTML;
            document.getElementById("lname").value=this.cells[1].innerHTML;
            document.getElementById("employee_id").value=this.cells[2].innerHTML;
            document.getElementById("contact_no").value=this.cells[3].innerHTML;

        };
    }

        //clear input text after removing any row
    //to avoid redundacy
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("employee_id").value="";
    document.getElementById("contact_no").value="";
}

selectedRowToInput();


//edit table
function editRow()
{
    var fname=document.getElementById("fname").value,
    lname=document.getElementById("lname").value,
    employee_id=document.getElementById("employee_id").value,
    contact_no=document.getElementById("contact_no").value;

    if(!checkInput())
    {
        table.rows[rIndex].cells[0].innerHTML=fname;
        table.rows[rIndex].cells[1].innerHTML=lname;
        table.rows[rIndex].cells[2].innerHTML=employee_id;
        table.rows[rIndex].cells[3].innerHTML=contact_no;
    }
    
    //clear input text after removing any row
    //to avoid redundacy
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("employee_id").value="";
    document.getElementById("contact_no").value="";

}

document.getElementById("editrow").addEventListener("click",editRow);


//to remove any rwo from the table

function removeRow()
{
    table.deleteRow(rIndex);
    //clear input text after removing any row
    //to avoid redundacy
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("employee_id").value="";
    document.getElementById("contact_no").value="";
}

document.getElementById("removerow").addEventListener("click",removeRow);
