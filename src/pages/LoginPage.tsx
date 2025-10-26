import React from 'react';
import LoginForm from './LoginForm';

const LoginPage: React.FC = () => {
  const handleLogin = (email, password) => {
    console.log('Logging in with:', { email, password });
    // Here you would typically handle the login logic,
    // like calling an API and redirecting the user.
  };

  return <LoginForm onLogin={handleLogin} />;
};

export default LoginPage;