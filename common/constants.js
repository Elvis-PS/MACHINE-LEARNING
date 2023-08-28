const constants={};

constants.DATA_DIR = "../data";
constants.RAW_DIR = constants.DATA_DIR+"/raw";
constants.DADTASET_DIR = constants.DATA_DIR+"/dataset";
constants.JSON_DIR =  constants.DADTASET_DIR+ "/json";
constants.IMG_DIR = constants.DADTASET_DIR + "/img";
constants.SAMPLES=constants.DADTASET_DIR+ "/samples.json";
constants.JS_OBJECTS="../common/js_objects";
constants.SAMPLES_JS= constants.JS_OBJECTS+"/samples.js";

/* for the frontend */
// export default constants;

if(typeof module!=='undefined')module.exports=constants;