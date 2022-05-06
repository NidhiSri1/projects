const express = require("express");
const router = express.Router();
const Flat = require("../models/flatModel");
const authenticate = require("../middleware/authenticate");
router.post("", authenticate, async (req, res) => {
    // console.log(req.body);
    try {
        const user_id = req.user._id;
        const flat = await Flat.create({
            Block: req.body.Block,
            Block_no: req.body.Block_no,

            Name: req.body.Name,
            Gender: req.body.Gender,
            Age: req.body.Age,

            manager: req.body.manager,
        });
        res.send(flat);
    } catch (err) {
        res.send(err.message);
    }
});

router.get("/:id", async (req, res) => {
    // console.log("req", req.query.page, "ki", req.query.size)
    try {
        const page = +req.query.page;
        const size = +req.query.size;

        const offSet = (page - 1) * size;
        const flatGet = await Flat.find({
            manager: req.params.id,
        })
            .populate({ path: "manager", select: ["name", "email", "token"] })
            .skip(offSet)
            .limit(size)
            .lean()
            .exec();

        res.send(flatGet);
    } catch (err) {
        res.send(err.message);
    }
});

router.get("/:id/:search", async (req, res) => {
    // console.log("req", req.params);
    try {
        const page = req.query.page || 1;
        const size = req.query.size || 4;
        const flatGet = await Flat.find({
            $and: [{ manager: req.params.id }, { Block: req.params.search }],
        })
            .populate({ path: "manager", select: ["name", "email", "token"] })
            .lean()
            .exec();
        res.send(flatGet);
    } catch (err) {
        res.send(err.message);
    }
});

router.get("/flat/specific/:id", async (req, res) => {
    console.log("specific");
    try {
        const flatGet = await Flat.findOne({ _id: req.params.id });
        console.log("flatGet", flatGet);
        res.send(flatGet);
    } catch (err) {
        console.log("flatGet");
        res.send(err.message);
    }
});
module.exports = router;
