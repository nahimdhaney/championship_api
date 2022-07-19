const { GraphQLSchema, GraphQLObjectType } = require("graphql");

// Queries
const { competitions: competitionsQuery } = require("./competition/query");
const { teams: teamsQuery,teamsByName,teamsByNameAndPlayers } = require("./team/query");

// Mutations
const { createCompetition,importLeague } = require("./competition/mutation");
const { createTeam } = require("./team/mutation");
const { players: playersQuery } = require("./player/query");


// Define QueryTypes
const QueryType = new GraphQLObjectType({
  name: "QueryType",
  description: "Queries",
  fields: {
    competitionsQuery,
    teamsQuery,
    playersQuery,
    teamsByName,
    teamsByNameAndPlayers,
  },
});

// Define MutationTypes
const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "Mutations",
  fields: {
    createCompetition,
    createTeam,
    importLeague,
  },
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
