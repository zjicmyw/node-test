var db = require('./foundation_db');
var sql="select top 10 * from okex;"
db(sql,function(err,result){
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
});
