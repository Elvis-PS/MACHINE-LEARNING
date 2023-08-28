
function createRow(container, studentName, samples){
    const row = document.createElement("div");
    row.classList.add("row"); 
    container.appendChild(row);

    const rowLabel=document.createElement("div");
    rowLabel.innerHTML=studentName;
    rowLabel.classList.add("rowLabel");

    row.appendChild(rowLabel); 
    samples.forEach((obj, index)=>{
        const {id} = obj;
        const img = document.createElement('img');
        img.src = "/data/dataset/img/"+id+".png";
        img.classList.add("thumb");
        row.appendChild(img);

    })
}
