const express = require('express');
const router = express.Router();

const userInfoSchema = require('../model/userInfo.model');
router.get('/', async (req, res) => {
    try{
        const result = await userInfoSchema.find({}, {_v: 0})
        res.send(result);
    }catch(e){
        res.send(e.message);
    }
})

router.post('/', async (req, res) => {
    try{
        const admin = new userInfoSchema(req.body);
        const result = await admin.save();
        res.send(result);
    }catch(e){
        res.send(e.message);
    }
})

module.exports = router;