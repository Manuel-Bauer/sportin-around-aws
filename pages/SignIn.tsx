import { useState } from 'react';
import { NextPage } from 'next';
import { Amplify } from 'aws-amplify';

import '@aws-amplify/ui-react/styles.css';

// Built Sign In first with AWS components and them customize them

// Built registration form

const SignInPage: NextPage = () => {
  /* INPUT STATES */
  const [loginEmail, setLoginEmail] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [registrationEmail, setRegistrationEmail] = useState<string>('');
  const [registrationPassword, setRegistrationPassword] = useState<string>('');
  const [registrationConfirmPassword, setRegistrationConfirmPassword] =
    useState<string>('');
  const [verificationCode, setVerfificationCode] = useState<string>('');

  return (
    <>
      <div>
        <input type='text' />
      </div>
    </>
  );
};

export default SignInPage;
