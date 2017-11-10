var express = require('express');
var router = express.Router();


router.post("/", function (req, resp) {
    if(req.session.curUser){
       var info = req.body.formData;
        var collection = database.collection("users");
        var cursor = collection.insert(info,function (err,state) {
            if(err) {
                console.log("提交失败");
            } else {
                resp.send({state:1});
            }
        });
    }

});

module.exports = router;
