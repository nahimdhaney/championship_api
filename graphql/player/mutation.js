const { GraphQLString, GraphQLList, GraphQLNonNull } = require("graphql");
const { Team } = require("../../models");
const { TeamType } = require("./type");

const createTeam = {
  type: TeamType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    code: { type: new GraphQLNonNull(GraphQLString) },
    tla: { type: new GraphQLNonNull(GraphQLString) },
    shortName: { type: new GraphQLNonNull(GraphQLString) },
    areaName: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    runningCompetitions: { type: new GraphQLList(GraphQLString) },
  },
  async resolve(
    _,
    { id, name, code, tla, shortName, areaName, email, runningCompetitions }
  ) {
    const newTeam = new Team({
      id,
      name,
      code,
      tla,
      shortName,
      areaName,
      email,
      runningCompetitions,
    });
    await newTeam.save();

    return newTeam;
  },
};

module.exports = {
  createTeam,
};
