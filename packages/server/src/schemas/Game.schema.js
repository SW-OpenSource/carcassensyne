const Game = `
  type Game {
    _id: ID!
    players: [Player!]!
    expansions: [String!]!
    createdAt: String!
  }
`
const GameQueries = `
  allGames: [Game]!
  
  findGameById(_id: ID!): Game
`

const GameMutations = `
  addGame(
    players: [Player!]!
  ): Game!

  updateGame(
    _id: ID!
    players: [Player!]!
  ): Game!
  
  deleteGame(
    _id: ID!
  ): Game!
`

const GameSchema = {
  Game,
  GameQueries,
  GameMutations,
}

export { GameSchema }
