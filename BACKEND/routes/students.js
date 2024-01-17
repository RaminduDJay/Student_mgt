const router = require("express").Router();
let Student = require("../models/Student");

router.route("/add").post((req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    
})