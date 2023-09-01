
function createRow(container, studentName, samples){
    const row = document.createElement("div");
    row.classList.add("row"); 
    container.appendChild(row);

    const rowLabel=document.createElement("div");
    rowLabel.innerHTML=studentName;
    rowLabel.classList.add("rowLabel");

    row.appendChild(rowLabel); 
    samples.forEach((obj, index)=>{
        const {id, label, student_id} = obj;

        const sampleContainer=document.createElement('div');  
        sampleContainer.id="sample_"+id;
        sampleContainer.classList.add("sampleContainer");

        const sampleLabel=document.createElement('div');
        sampleLabel.innerHTML=label;
        sampleContainer.appendChild(sampleLabel);

        const img = document.createElement('img');
        img.src = "/data/dataset/img/"+id+".png";
        img.classList.add("thumb");

        if(utils.flaggedUsers.includes(student_id)){
            img.classList.add('blur');
        }

        sampleContainer.appendChild(img);
        row.appendChild(sampleContainer);

    })
}
