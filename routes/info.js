var express = require('express');
var router = express.Router();

/* GET home page. */
router.post("/", function (req, resp) {
    if(req.session.curUser) {
        var collection = database.collection("user");
        var cursor = collection.find().toArray(function (err,data) {
            resp.send(data);
        });
    }
});

module.exports = router;
