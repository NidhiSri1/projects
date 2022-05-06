const mongoose = require("mongoose");

const flatModel = new mongoose.Schema(
    [
        {
            manager: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "user",
                requried: true,
            },
            Block: { type: String },
            Block_no: { type: Number },

            Name: { type: String },
            Gender: { type: String },
            Age: { type: Number },
        },
    ],
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("flat", flatModel);
