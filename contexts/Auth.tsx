import { Auth } from 'aws-amplify';
import { CognitoUser } from '@aws-amplify/auth';

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
