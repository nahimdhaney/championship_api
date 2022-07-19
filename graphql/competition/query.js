const { GraphQLList, GraphQLID, GraphQLNonNull } = require("graphql");
const { CompetitionType } = require("./type");
const { Competition } = require("../../models");

const competitions = {
    type: new GraphQLList(CompetitionType),
    description: "Retrieves a list of competitions",
    resolve: () => Competition.find(),
};

module.exports = { competitions };
