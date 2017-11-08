var express = require('express');
var router = express.Router();

/* GET home page. */
router.post("/", function (req, resp) {
    if(req.session.curUser) {
        var collection = database.collection("users");
        collection.find().toArray(function (err,data) {
            resp.send(data);
        });
        collection.remove({_id:req.body.id}).then(function(err,state) {
            if(err) {
                console.log("删除失败");
                resp.send("-1");
            } else {
                resp.send({state:1});
            }
        });
    }
});


module.exports = router;
