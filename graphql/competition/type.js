const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString
  } = require("graphql");

//   Competition (“name”, “code”, “areaName”)
  const CompetitionType = new GraphQLObjectType({
    name: "Competition",
    description: "Competition type",
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      code: { type: GraphQLString },
      areaName: { type: GraphQLString },
      areaId: { type: GraphQLString },
    }),
  });


  module.exports = {
    CompetitionType,
  };
  