
class SketchPad{
    constructor(container, size=450){
        this.canvas = document.createElement('canvas');
        this.canvas.width = size;
        this.canvas.height = size;
        this.canvas.style =  `
            background-color: white;
            box-shadow: 0px 0px 8px 2px black;
        `;
        container.appendChild(this.canvas);

        this.paths=[];
        this.isDrawing = false;
        this.ctx = this.canvas.getContext("2d");
        this.#addEventListeners();

    }
    
    #addEventListeners(){
        this.canvas.onmousedown=(evt)=>{
            const path = [this.#getMouse(evt)];
            this.paths.push(path);
            this.isDrawing=true;
        }
        this.canvas.onmousemove=(evt)=>{
            if(this.isDrawing){                
                this.paths[this.paths.length-1].push(this.#getMouse(evt));
                this.#redraw();
            }
        }
        this.canvas.onmouseup=()=>{
            this.isDrawing=false;
        }
    }

    #redraw(){
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.paths.forEach(path=>draw.path(this.ctx, path));
    }

    #getMouse = (evt) =>{
        const rect = this.canvas.getBoundingClientRect();
        return [
            Math.round(evt.clientX-rect.left),
            Math.round(evt.clientY-rect.top)
        ]
    }

}