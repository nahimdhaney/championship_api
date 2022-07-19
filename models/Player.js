const { Schema, model } = require("mongoose");

// Player ("id",“name”, “position”, “dateOfBirth”, “countryOfBirth”, “nationality”,"currentTeam")
// {
//     "id": 11656,
//     "firstName": "Agustín",
//     "lastName": "Rossi",
//     "name": "Agustín Rossi",
//     "position": "Goalkeeper",
//     "dateOfBirth": "1995-08-21",
//     "nationality": "Argentina",
//     "shirtNumber": 1,
//     "marketValue": 3200000,
//     "contract": {
//         "start": "2017-02",
//         "until": "2023-12"
//     }
// }
const PlayerSchema = new Schema(
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
        position: {
            type: String,
            required: false,
        },
        dateOfBirth: {
            type: String,
            required: false,
        },
        countryOfBirth: {
            type: String,
            required: false,
        },
        nationality:{
            type: String,
            required: false,
        },
        currentTeamId:{
            type: String,
            required: false,      
        }
    },
    {
        timestamps: true,
    }
);

module.exports = model("Player", PlayerSchema);
