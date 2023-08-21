const draw={};

draw.path =(ctx, path, color='black')=>{
    ctx.strokeStyle=color;
    ctx.lineWidth=3;
    ctx.beginPath();
    ctx.moveTo(...path[0]);
    for(let i=0; i<path.length; i++){
          ctx.lineTo(... path[i]);
    }

    ctx.lineCap = "round";
    ctx.leneJoin = "round";
    ctx.stroke(); 
}
