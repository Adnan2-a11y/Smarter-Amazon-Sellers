import React from 'react';
import SignupForm from './SignupForm';

const SignupPage: React.FC = () => {
  const handleSignup = (email, password) => {
    console.log('Signing up with:', { email, password });
    // Here you would typically handle the signup logic,
    // like calling an API and redirecting the user.
  };

  return <SignupForm onSignup={handleSignup} />;
};

export default SignupPage;