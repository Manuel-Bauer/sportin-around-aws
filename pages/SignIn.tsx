import { useState } from 'react';
import { NextPage } from 'next';
import { Amplify } from 'aws-amplify';
import { useAuth } from '../contexts/Auth';

import '@aws-amplify/ui-react/styles.css';

const minPasswordStrength = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})'
);

// Built Sign In first with AWS components and them customize them

// Built registration form

const SignInPage: NextPage = () => {
  const authUtils = useAuth()


  /* INPUT STATES */
  const [loginEmail, setLoginEmail] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [registrationEmail, setRegistrationEmail] = useState<string>('');
  const [registrationPassword, setRegistrationPassword] = useState<string>('');
  const [registrationConfirmPassword, setRegistrationConfirmPassword] =
    useState<string>('');
  const [registrationUsername, setRegistrationUsername] = useState<string>("")
  const [verificationCode, setVerfificationCode] = useState<string>('');

  /* ERROR STATES */
  const [loginError, setLoginError] = useState<string>('');
  const [registrationError, setRegistrationError] = useState<string>('');
  const [verificatioNError, setVerificationError] = useState<string>('');
  const [resendError, setResendError] = useState<string>('');

  /* LOADING STATES */
  const [registrationLoading, setRegistrationLoading] =
    useState<boolean>(false);

  async function handleRegistration() {
    setRegistrationLoading(true);
    if (!minPasswordStrength.test(registrationPassword)) {
      setRegistrationError("Password must be at least 8 characters long and contain special characters")
      setRegistrationLoading(false)
      return
    }
    if(registrationPassword === registrationConfirmPassword) {
      try {
        await authUtils?.signup(registrationUsername, registrationPassword, registrationEmail)
      }
    }
  }

  return (
    <>
      <div>
        <input type='text' />
      </div>
    </>
  );
};

export default SignInPage;
