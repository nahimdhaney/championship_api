const { GraphQLList, GraphQLID, GraphQLString } = require("graphql");
const { PlayerType } = require("./type");
const { Player } = require("../../models");

const players = {
    type: new GraphQLList(PlayerType),
    description: "Retrieves a list of Players",
    args: { id: { type: GraphQLString } },
    resolve: (_, { id }) =>
        Player.aggregate([{
            $lookup:
            {
                from: "teams",
                localField: "currentTeamId",
                foreignField: "id",
                as: "teams"
            }
        },
        { $match: { 'teams.runningCompetitions': { $in: [id] } } }
        ])
};


module.exports = { players };
