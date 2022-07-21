/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      givenName
      familyName
      email
      avatar
      about
      tournaments {
        items {
          id
          title
          date
          createdAt
          updatedAt
          userTournamentsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        givenName
        familyName
        email
        avatar
        about
        tournaments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTournament = /* GraphQL */ `
  query GetTournament($id: ID!) {
    getTournament(id: $id) {
      id
      title
      date
      createdAt
      updatedAt
      userTournamentsId
    }
  }
`;
export const listTournaments = /* GraphQL */ `
  query ListTournaments(
    $filter: ModelTournamentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTournaments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        date
        createdAt
        updatedAt
        userTournamentsId
      }
      nextToken
    }
  }
`;
