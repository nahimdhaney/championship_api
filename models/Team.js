
const { Schema, model } = require("mongoose");

const TeamSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        tla: {
            type: String,
            required: true,
        },
        shortName: {
            type: String,
            required: true,
        },
        areaName: {
            type: String,
            required: false,
        },
        email:{
            type: String,
            required: false,
        },
        runningCompetitions:{
            type: [String],
            required: false,      
        }
    },
    {
        timestamps: true,
    }
);

// [{ type: mongoose.Types.ObjectId, ref: 'Category' }]

module.exports = model("Team", TeamSchema);





