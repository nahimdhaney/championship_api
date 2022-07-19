const { GraphQLList, GraphQLString } = require("graphql");
const { TeamType } = require("./type");
const { Team } = require("../../models");

const teams = {
    type: new GraphQLList(TeamType),
    description: "Retrieves a list of teams",
    resolve: () => Team.find(),
};

const teamsByName = {
    type: new GraphQLList(TeamType),
    description: "Retrieves a list of teams filter by name",
    args: { name: { type: GraphQLString } },
    resolve: (_, { name }) => {
        return Team.find({ name: name })
    }
};

const teamsByNameAndPlayers = {
    type: new GraphQLList(TeamType),
    description: "Retrieves a list of teams",
    args: { name: { type: GraphQLString } },
    resolve: (_, { name }) => {
        return Team.aggregate([{
            $lookup:
            {
                from: "players",
                localField: "id",
                foreignField: "currentTeamId",
                as: "players"
            }
        },
        { $match: { 'name': name } }
        ])
    }
};


module.exports = { teams, teamsByName, teamsByNameAndPlayers };
