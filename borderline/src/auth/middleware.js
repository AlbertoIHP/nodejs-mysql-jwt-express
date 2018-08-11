import api from "../tools/common"

function authorization(req, res, next) {
    var token = req.headers['authorization'];
 var flag = true;
 if(token == null || token == ''){
   flag = false;
 }
 if(flag){
   jwt.verify(token, salt, function (err, decoded) {
     // body...
     if (err) {
        api.error(res, "Token consistency error", "401");
     }else{
         next();
     }
   });
 }else{
     api.error(res, "Token not provided", "401");
 }    
}

module.exports = {
    authorization
}
