/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createTournament = /* GraphQL */ `
  mutation CreateTournament(
    $input: CreateTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    createTournament(input: $input, condition: $condition) {
      id
      title
      date
      createdAt
      updatedAt
      userTournamentsId
    }
  }
`;
export const updateTournament = /* GraphQL */ `
  mutation UpdateTournament(
    $input: UpdateTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    updateTournament(input: $input, condition: $condition) {
      id
      title
      date
      createdAt
      updatedAt
      userTournamentsId
    }
  }
`;
export const deleteTournament = /* GraphQL */ `
  mutation DeleteTournament(
    $input: DeleteTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    deleteTournament(input: $input, condition: $condition) {
      id
      title
      date
      createdAt
      updatedAt
      userTournamentsId
    }
  }
`;
