function createRow(container, studentName, samples){
    const row = document.createElement("div");
    row.classList.add("row"); 
    container.appendChild(row);

    const rowLabel=document.createElement("div");
    rowLabel.innerHTML=studentName;
    rowLabel.classList.add('rowLabel');

    row.appendChild(rowLabel); 

    
    for(let sample in samples){
        //this code is probably broken. It should not print a number, but an object here
        console.log(sample);
    }
}
