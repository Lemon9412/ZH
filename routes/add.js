var express = require('express');
var router = express.Router();


router.post("/", function (req, resp) {
    if(req.session.curUser){
        var info = req.body;
        var collection = database.collection("users");
        collection.insert(req.body,function (err,state) {
            if(err) {
                console.log("提交失败");
            } else {
                resp.send({state:1});
            }
        });
    }
});

module.exports = router;
