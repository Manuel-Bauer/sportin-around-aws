/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateTournament = /* GraphQL */ `
  subscription OnCreateTournament {
    onCreateTournament {
      id
      title
      date
      createdAt
      updatedAt
      userTournamentsId
    }
  }
`;
export const onUpdateTournament = /* GraphQL */ `
  subscription OnUpdateTournament {
    onUpdateTournament {
      id
      title
      date
      createdAt
      updatedAt
      userTournamentsId
    }
  }
`;
export const onDeleteTournament = /* GraphQL */ `
  subscription OnDeleteTournament {
    onDeleteTournament {
      id
      title
      date
      createdAt
      updatedAt
      userTournamentsId
    }
  }
`;
