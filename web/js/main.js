// import SketchPad from './sketchPad.js';

        const sketchPadContainer = document.querySelector('#sketchPadContainer');
        const sketchPad = new SketchPad(sketchPadContainer);
        const instructions = document.querySelector('#instructions');
        const advanceBtn = document.querySelector('#advanceBtn');
        
        let index = 0;
        const labels =[
            "car", "fish", "house", "three", "bicycle", "guitar", "pencil", "clock",
        ]
        
        const data = {
            student: null,
            session: new Date().getTime(),
            drawings:{},
        }

        const start = () =>{
            if(student.value==""){
                alert("Please type your name first");
                return; 
            }
            data.student=student.value;
            student.style.display = 'none';
            sketchPadContainer.style.visibility = 'visible';
            const label = labels[index];
            instructions.innerHTML = `Please, draw a ${label}`;
            instructions.style=`
            padding: 10px 5px;
            margin-top: 20px;
                padding: 2px 10px 2px 10px;
                height: 30px;
                color: black;
                font-size: 1.3rem;
                font-weight: bold;
                text-shadow: 0px 0px 1px black;
                `;
                
                advanceBtn.innerHTML = 'NEXT';
                advanceBtn.onclick = next;
            }
            
        advanceBtn.onclick = start;
        const next = () =>{
            if(sketchPad.paths.length==0){
                alert("Draw something first");
                return;
            }
            const label = labels[index];
            data.drawings[label] = sketchPad.paths;
            sketchPad.reset();
            index++;

            if(index<labels.length){
                const nextLabel = labels[index];
                instructions.innerHTML = `Please, draw a ${nextLabel}`;
            }else{
                sketchPadContainer.style.visibility = "hidden";
                instructions.innerHTML = "Thank you!";
                advanceBtn.innerHTML = "SAVE";
                advanceBtn.onclick=save;
            }
        }
            
        /* This funciton represents the basic download method of files in javascript */
        const save=()=>{
            const element = document.createElement('a');
            advanceBtn.style.display = 'none';
            instructions.innerHTML = 'Take your download file and place it alongside the other dataset';

            element.setAttribute('href', 'data:text/plain;charset=utf-8,'+encodeURIComponent(JSON.stringify(data)));
            const fileName=data.session+".json";
            element.setAttribute('download', fileName);

            element.style.display = "none";
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);            
        }
