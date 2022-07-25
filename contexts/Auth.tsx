import { Auth, Hub } from 'aws-amplify';
import { CognitoUser } from '@aws-amplify/auth';
import React, { useContext, useState, useEffect } from 'react';
import { useQuery } from 'react-query';

const AuthContext = React.createContext(null);

/* ----- HOOK TO MAKE AUTH REUSABLE----- */
export function useAuth() {
  return useContext(AuthContext);
}

/* ----- Provider ----- */
export function AuthProvider({ children }: React.PropsWithChildren) {
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);

  const { refetch: userRefetch } = useQuery(
    ['user', currentUserId],
    () => console.log('getUserById'),
    {
      enabled: !!currentUserId,
      onSuccess: (data) => setCurrentUser(data),
    }
  );
  async function signup(
    username: string,
    password: string,
    email: string
  ): Promise<CognitoUser | void> {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      return user;
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  async function confirmSignUp(email: string, code: string): Promise<void> {
    try {
      Auth.confirmSignUp(email, code);
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  async function signIn(
    username: string,
    password: string
  ): Promise<CognitoUser | void> {
    try {
      const user = await Auth.signIn(username, password);
      return user;
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  async function resendConfirmationCode(username: string): Promise<void> {
    try {
      await Auth.resendSignUp(username);
      console.log('code resent successfully');
    } catch (err) {
      console.log('error resending code: ', err);
    }
  }

  async function signOut(): Promise<void> {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  useEffect(() => {
    /* On First Load */
    Auth.currentAuthenticatedUser()
      .then((user) => user && setCurrentUserId(user.username))
      .catch((err) => setCurrentUserId(null));

    /* On auth events */
    Hub.listen('auth', ({ payload }) => {
      Auth.currentAuthenticatedUser()
        .then((user) => user && setCurrentUserId(user.username))
        .catch((err) => setCurrentUserId(null));
    });
  }, []);

  // Get all user data when current User ID changes
  useEffect(() => {
    userRefetch();
  }, [currentUserId]);

  const value = {
    currentUserId,
    currentUser,
    signup,
    signIn,
    signOut,
    resendConfirmationCode,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
