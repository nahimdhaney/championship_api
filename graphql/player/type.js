const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} = require("graphql");

const PlayerType = new GraphQLObjectType({
  name: "Player",
  description: "Player type",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    tla: { type: GraphQLString },
    position: { type: GraphQLString },
    dateOfBirth: { type: GraphQLString },
    countryOfBirth: { type: GraphQLString },
    nationality: { type: GraphQLString },
    currentPlayerId: { type: GraphQLString }
  })
});

module.exports = {
  PlayerType,
};
