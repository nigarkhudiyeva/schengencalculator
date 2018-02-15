function addRow(){
 var table = document.getElementById("tab");
 var row = table.insertRow();


 var cell1 = row.insertCell();
 var cell2 = row.insertCell();
 var cell3 = row.insertCell();
 var newInput = document.createElement("input");
 var newInput2 = document.createElement("input");
 var newText = document.createElement("text");
 newInput2.setAttribute("onchange","calculate(this.parentElement.parentElement)");
 cell1.appendChild(newInput);
 cell2.appendChild(newInput2);
}

function calculate(trDocument){
  console.log(trDocument);

  //saves the values of inputs
  var entryInString= trDocument.getElementsByTagName('input')[0].value;
  var leaveInString= trDocument.getElementsByTagName('input')[1].value;
  //changes string valuest to Date
  var entryDate= new Date(entryInString);
  var leaveDate= new Date(leaveInString);
  //calculates the number of stays in Days
   var calc= (leaveDate - entryDate)/1000/60/60/24;
  //write result to the seperate cell
    if(calc==1|| calc==0){
      trDocument.getElementsByTagName("td")[2].innerHTML=calc + " day";
    }else{
    trDocument.getElementsByTagName("td")[2].innerHTML=calc + " days";
    }

}
