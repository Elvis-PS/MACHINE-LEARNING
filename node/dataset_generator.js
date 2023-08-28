/* imports */
const draw = require('../common/draw.js');
const constants = require('../common/constants.js');
const {createCanvas}=require('canvas');
const utils = require('../common/utils.js');



//Global variables
const canvas = createCanvas(400, 400);
const ctx = canvas.getContext('2d');
const fs= require('fs');
const fileNames= fs.readdirSync(constants.RAW_DIR);
const samples =[];
let id=1;


fileNames.forEach((fileName)=>{
    //method used to read the content of a file
    const content = fs.readFileSync(constants.RAW_DIR+'/'+fileName);
    const {session, student, drawings} = JSON.parse(content);
    // for each label(drawing name) on each drawings we create a object sample
    for(let label in drawings){
        samples.push({
            id,
            label,
            student_name:student,
            student_id:session,
        });
        // The coords. representing each individual drawing(labeled)
        const paths = drawings[label];

        //we create a json file for each drawing on the drawing obj.
        fs.writeFileSync(constants.JSON_DIR+'/'+id+'.json', JSON.stringify(paths));
        
        //we also generate an img(png) for each drawing on the drawing obj.
        generateImageFile(constants.IMG_DIR+'/'+id+'.png', paths);  
        utils.printProgress(id, fileNames.length*8);
        id++;
    }
})

function generateImageFile(outFile, paths){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw.paths(ctx, paths);
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync(outFile, buffer);
     
}

/* this method generates a json file with all items in samples array */
fs.writeFileSync(constants.SAMPLES, JSON.stringify(samples));
/* This method generates a JS file with all items of samples array inside another array */
fs.writeFileSync(constants.SAMPLES_JS, "const samples="+ JSON.stringify(samples)+";");


 