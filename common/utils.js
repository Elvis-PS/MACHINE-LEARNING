const utils={};

utils.formatpercent = (n)=>{
    return (n*100).toFixed(2)+"%";
}

utils.printProgress=(count, max)=>{
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    const percent=utils.formatpercent(count/max);
    process.stdout.write(count+"/"+max+"("+percent+")");
}

utils.groupBy=(objArray, key)=>{
    const groups = {};
    // below is the representation of our final object
    /* groups={student_id A:[0{},1{},2{}...n{}], student_id B:[0{},1{},2{}...n{}]...student_id n:[]} */
    for(let obj of objArray){
        //here assign the student_id "value" of each obj to const val
        const val = obj[key];
        if(groups[val]==null){
            //I check if we have created the element/key(key corresponding of an array) on the groups obj. If not we assign it a empty array.
            groups[val] = []; 
        }
        //else, we push every object that has the key, into the array named after the key insine the groups obj.
        groups[val].push(obj);
    }
    return groups;
}

if(typeof module!=='undefined')module.exports=utils;