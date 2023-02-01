console.log("qoutes.js");
window.addEventListener('DOMContentLoaded', () =>{

//Qoutes generators 
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data[0].text)
    console.log(data[0].author);
    buildTable(data);
  });

  

    
})

function buildTable(data){
    let table = document.getElementById("myTable")
    for(let i =0; i < 5; i++){

        let row = `
        <tr>
        <td> "${data[i].text}" </td>
        <td> :${data[i].author} </td>
        </tr>
        `
        table.innerHTML += row
    }

}
