function extract(Jobject){
    var t = JSON.stringify(Jobject); 
    t = t.match(/\d+/);
    var n = parseFloat(t);
    return n;
}
module.exports = extract;