const constants = {};

constants.DATA_DIR = "../data";
constants.RAW_DIR = constants.DATA_DIR+"/raw";
constants.DADTASET_DIR = constants.DATA_DIR+"/dataset";
constants.JSON_DIR =  constants.DADTASET_DIR+ "/json";
constants.IMG_DIR = constants.DADTASET_DIR + "/img";
constants.SAMPLES=constants.DADTASET_DIR+ "/samples.json";

const fs= require('fs');

const fileNames= fs.readdirSync(constants.RAW_DIR);
const samples =[];
let id=1;

fileNames.forEach(fn=>{
    const content = fs.readFileSync(constants.RAW_DIR+"/"+fn);
    const {session, student, drawings} = JSON.parse(content);
    for (let label in drawings){
        samples.push({
            id,
            label,
            student_name: student,
            student_id: session,
        })
        id++;
    }
});

//desconstruct the json element into variables.

fs.writeFileSync(constants.SAMPLES, JSON.stringify(samples));

 