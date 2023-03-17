"use strict";

$(document).ready(()=>{
    $("#search").click(()=>{
        var emp_num=$("#emp_num").val();
        const url="http://localhost:5000/read";
        fetch(url,{
            headers:{
                "Content-type":"application/json"
            },
            method:"POST",
            body:JSON.stringify({emp_no:emp_num})
        }).then(response=> response.json())
        .then(data=>loadHTMLTable(data["item"]))
        .catch(err=>console.log(err));
    });

})

function loadHTMLTable(data){
    console.log(data);
    const table=document.querySelector("table tbody")
    if(data.length==0){
        table.innerHTML="<tr><td class='no-data' colspan='6'>No data</tr>"
    }else{
        var tableHTML="";
        data.forEach(element => {
            tableHTML+=`<tr>`
            tableHTML+=`<td>${element.emp_no}</td>`
            tableHTML+=`<td>${element.first_name}</td>`
            tableHTML+=`<td>${element.last_name}</td>`
            tableHTML+=`<td>${element.gender}</td>`
            tableHTML+=`<td>${new Date(element.hire_date).toLocaleDateString('en-US')}</td>`
            tableHTML+=`<td>${new Date(element.birth_date).toLocaleDateString('en-US')}</td>`

            tableHTML+=`</tr>`
        });
        table.innerHTML=tableHTML;
    }
}