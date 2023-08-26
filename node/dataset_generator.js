const draw = require('../common/draw.js')
const {createCanvas}=require('canvas');
const canvas = createCanvas(400, 400);
const ctx = canvas.getContext('2d');
const constants = {};

constants.DATA_DIR = "../data";
constants.RAW_DIR = constants.DATA_DIR+"/raw";
constants.DADTASET_DIR = constants.DATA_DIR+"/dataset";
constants.JSON_DIR =  constants.DADTASET_DIR+ "/json";
constants.IMG_DIR = constants.DADTASET_DIR + "/img";
constants.SAMPLES=constants.DADTASET_DIR+ "/samples.json";

const fs= require('fs');

//used to read directory files
const fileNames= fs.readdirSync(constants.RAW_DIR);
const samples =[];
let id=1;

fileNames.forEach((fileName)=>{
    //method used to read the content of a file
    const content = fs.readFileSync(constants.RAW_DIR+'/'+fileName);
    const {session, student, drawings} = JSON.parse(content);
    for(let label in drawings){
        samples.push({
            id,
            label,
            student_name:student,
            student_id:session,
        });
        const paths = drawings[label];
        fs.writeFileSync(constants.JSON_DIR+'/'+id+'.json', JSON.stringify(paths));
        generateImageFile(constants.IMG_DIR+'/'+id+'.png', paths);
        id++;
    }
})

function generateImageFile(outFile, paths){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw.paths(ctx, paths);
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync(outFile, buffer);
     
}

fs.writeFileSync(constants.SAMPLES, JSON.stringify(samples));


 