const express = require("express");
const connect = require("./configs/db");
var cors = require("cors");
const app = express();
const { body, validationResult } = require("express-validator");
app.use(cors());
app.use(express.json());
const flatController = require("./controllers/flatControllers");
const { register, login } = require("./controllers/userAuthController");

app.post(
    "/register",
    body("name").isString().isLength({ min: 2, max: 20 }),
    body("email").isEmail(),
    body("password").isLength({ min: 1, max: 6 }),
    register
);
app.post(
    "/login",
    body("email").isEmail(),
    body("password").isLength({ min: 1, max: 6 }),
    login
);

app.use("/flat", flatController);

app.listen(2424, async () => {
    try {
        await connect();
        console.log("listining on port 2424");
    } catch (err) {
        console.log(err);
    }
});
