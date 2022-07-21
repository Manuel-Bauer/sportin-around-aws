/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  givenName?: string | null,
  familyName?: string | null,
  email: string,
  avatar?: string | null,
  about?: string | null,
};

export type ModelUserConditionInput = {
  givenName?: ModelStringInput | null,
  familyName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  about?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  givenName?: string | null,
  familyName?: string | null,
  email: string,
  avatar?: string | null,
  about?: string | null,
  tournaments?: ModelTournamentConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelTournamentConnection = {
  __typename: "ModelTournamentConnection",
  items:  Array<Tournament | null >,
  nextToken?: string | null,
};

export type Tournament = {
  __typename: "Tournament",
  id: string,
  title: string,
  date?: string | null,
  createdAt: string,
  updatedAt: string,
  userTournamentsId?: string | null,
};

export type UpdateUserInput = {
  id: string,
  givenName?: string | null,
  familyName?: string | null,
  email?: string | null,
  avatar?: string | null,
  about?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateTournamentInput = {
  id?: string | null,
  title: string,
  date?: string | null,
  userTournamentsId?: string | null,
};

export type ModelTournamentConditionInput = {
  title?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelTournamentConditionInput | null > | null,
  or?: Array< ModelTournamentConditionInput | null > | null,
  not?: ModelTournamentConditionInput | null,
  userTournamentsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateTournamentInput = {
  id: string,
  title?: string | null,
  date?: string | null,
  userTournamentsId?: string | null,
};

export type DeleteTournamentInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  givenName?: ModelStringInput | null,
  familyName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  about?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelTournamentFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelTournamentFilterInput | null > | null,
  or?: Array< ModelTournamentFilterInput | null > | null,
  not?: ModelTournamentFilterInput | null,
  userTournamentsId?: ModelIDInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    givenName?: string | null,
    familyName?: string | null,
    email: string,
    avatar?: string | null,
    about?: string | null,
    tournaments?:  {
      __typename: "ModelTournamentConnection",
      items:  Array< {
        __typename: "Tournament",
        id: string,
        title: string,
        date?: string | null,
        createdAt: string,
        updatedAt: string,
        userTournamentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    givenName?: string | null,
    familyName?: string | null,
    email: string,
    avatar?: string | null,
    about?: string | null,
    tournaments?:  {
      __typename: "ModelTournamentConnection",
      items:  Array< {
        __typename: "Tournament",
        id: string,
        title: string,
        date?: string | null,
        createdAt: string,
        updatedAt: string,
        userTournamentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    givenName?: string | null,
    familyName?: string | null,
    email: string,
    avatar?: string | null,
    about?: string | null,
    tournaments?:  {
      __typename: "ModelTournamentConnection",
      items:  Array< {
        __typename: "Tournament",
        id: string,
        title: string,
        date?: string | null,
        createdAt: string,
        updatedAt: string,
        userTournamentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTournamentMutationVariables = {
  input: CreateTournamentInput,
  condition?: ModelTournamentConditionInput | null,
};

export type CreateTournamentMutation = {
  createTournament?:  {
    __typename: "Tournament",
    id: string,
    title: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    userTournamentsId?: string | null,
  } | null,
};

export type UpdateTournamentMutationVariables = {
  input: UpdateTournamentInput,
  condition?: ModelTournamentConditionInput | null,
};

export type UpdateTournamentMutation = {
  updateTournament?:  {
    __typename: "Tournament",
    id: string,
    title: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    userTournamentsId?: string | null,
  } | null,
};

export type DeleteTournamentMutationVariables = {
  input: DeleteTournamentInput,
  condition?: ModelTournamentConditionInput | null,
};

export type DeleteTournamentMutation = {
  deleteTournament?:  {
    __typename: "Tournament",
    id: string,
    title: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    userTournamentsId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    givenName?: string | null,
    familyName?: string | null,
    email: string,
    avatar?: string | null,
    about?: string | null,
    tournaments?:  {
      __typename: "ModelTournamentConnection",
      items:  Array< {
        __typename: "Tournament",
        id: string,
        title: string,
        date?: string | null,
        createdAt: string,
        updatedAt: string,
        userTournamentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      givenName?: string | null,
      familyName?: string | null,
      email: string,
      avatar?: string | null,
      about?: string | null,
      tournaments?:  {
        __typename: "ModelTournamentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTournamentQueryVariables = {
  id: string,
};

export type GetTournamentQuery = {
  getTournament?:  {
    __typename: "Tournament",
    id: string,
    title: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    userTournamentsId?: string | null,
  } | null,
};

export type ListTournamentsQueryVariables = {
  filter?: ModelTournamentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTournamentsQuery = {
  listTournaments?:  {
    __typename: "ModelTournamentConnection",
    items:  Array< {
      __typename: "Tournament",
      id: string,
      title: string,
      date?: string | null,
      createdAt: string,
      updatedAt: string,
      userTournamentsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    givenName?: string | null,
    familyName?: string | null,
    email: string,
    avatar?: string | null,
    about?: string | null,
    tournaments?:  {
      __typename: "ModelTournamentConnection",
      items:  Array< {
        __typename: "Tournament",
        id: string,
        title: string,
        date?: string | null,
        createdAt: string,
        updatedAt: string,
        userTournamentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    givenName?: string | null,
    familyName?: string | null,
    email: string,
    avatar?: string | null,
    about?: string | null,
    tournaments?:  {
      __typename: "ModelTournamentConnection",
      items:  Array< {
        __typename: "Tournament",
        id: string,
        title: string,
        date?: string | null,
        createdAt: string,
        updatedAt: string,
        userTournamentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    givenName?: string | null,
    familyName?: string | null,
    email: string,
    avatar?: string | null,
    about?: string | null,
    tournaments?:  {
      __typename: "ModelTournamentConnection",
      items:  Array< {
        __typename: "Tournament",
        id: string,
        title: string,
        date?: string | null,
        createdAt: string,
        updatedAt: string,
        userTournamentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTournamentSubscription = {
  onCreateTournament?:  {
    __typename: "Tournament",
    id: string,
    title: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    userTournamentsId?: string | null,
  } | null,
};

export type OnUpdateTournamentSubscription = {
  onUpdateTournament?:  {
    __typename: "Tournament",
    id: string,
    title: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    userTournamentsId?: string | null,
  } | null,
};

export type OnDeleteTournamentSubscription = {
  onDeleteTournament?:  {
    __typename: "Tournament",
    id: string,
    title: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    userTournamentsId?: string | null,
  } | null,
};
