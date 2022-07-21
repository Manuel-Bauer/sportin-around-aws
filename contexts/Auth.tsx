import { Auth } from 'aws-amplify';
import { CognitoUser } from '@aws-amplify/auth';

async function signup(
  username: string,
  password: string
): Promise<CognitoUser> {
  const { user } = await Auth.signUp({
    username,
    password,
  });
  return user;
}
