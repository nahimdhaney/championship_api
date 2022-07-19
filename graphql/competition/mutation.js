const { GraphQLString, GraphQLID, GraphQLNonNull } = require("graphql");
const { apiRequest } = require("../../app/utils/client");
const { Competition, Team, Player } = require("../../models");
const { CompetitionType } = require("./type");

const createCompetition = {
    type: CompetitionType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        code: { type: new GraphQLNonNull(GraphQLString) },
        areaName: { type: new GraphQLNonNull(GraphQLString) },
        areaId: { type: new GraphQLNonNull(GraphQLString) },
    },
    async resolve(_, { id, name, code, areaName, areaId }) {
        const newCompetition = new Competition({
            id,
            name,
            code,
            areaName,
            areaId,
        });
        await newCompetition.save();

        return newCompetition;
    },
};

const importLeague = {
    type: CompetitionType,
    args: {
        leagueCode: { type: new GraphQLNonNull(GraphQLString) },
    },
    async resolve(_, leagueCodeObj) {
        const league = await apiRequest(
            "GET",
            `/v4/competitions/${leagueCodeObj.leagueCode}`
        );

        const competitionToInsert = {
            id: league.id,
            name: league.name,
            code: league.code,
            areaId: league.area.id,
            areaName: league.area.name,
        };

        const newCompetition = new Competition(competitionToInsert);

        await newCompetition.save();

        const teamsCompetition = await apiRequest(
            "GET",
            `/v4/competitions/${leagueCodeObj.leagueCode}/teams`
        );
        const teams = teamsCompetition.teams || [];
        for (const team of teams) {
            const teamToInsert = {
                id: team.id,
                name: team.name,
                tla: team.tla,
                shortName: team.shortName,
                areaName: team.areaName,
                email: team.email,
                runningCompetitions: team.runningCompetitions.map((obj) => {
                    return obj.id;
                }),
            };

            const newTeam = new Team(teamToInsert);

            await newTeam.save();

            const players = team.squad || [];

            for (const player of players) {
                const playerToInsert = {
                    id: player.id,
                    name: player.name,
                    position: player.position,
                    dateOfBirth: player.dateOfBirth,
                    nationality: player.nationality,
                    currentTeamId: team.id,
                };
                const newPlayer = new Player(playerToInsert);
                try {
                    await newPlayer.save();
                } catch (error) {
                    console.log(error)
                }
            }
        }

        return newCompetition;
    },
};

module.exports = {
    createCompetition,
    importLeague,
};
