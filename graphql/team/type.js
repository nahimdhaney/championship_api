const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} = require("graphql");
const { Competition } = require("../../models");

const { CompetitionType } = require("../competition/type");
const { PlayerType } = require("../player/type");

const TeamType = new GraphQLObjectType({
  name: "Team",
  description: "Team type",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    tla: { type: GraphQLString },
    shortName: { type: GraphQLString },
    areaName: { type: GraphQLString },
    email: { type: GraphQLString },
    players: { type: GraphQLList(CompetitionType) },
    competitions: {
      type: new GraphQLList(CompetitionType),
      resolve: (parent) => {
        return Competition.find({ id: { $in: parent.runningCompetitions } });
      },
    },
  }),
});

module.exports = {
  TeamType,
};
