import { useAppSelector } from '@app/hooks';
import { selectUserAuth } from '@features/authentication/auth';
import React from 'react';
import { Navigate } from 'react-router-dom';

type AuthRouteProps = { 
  children: React.ReactNode 
} 

export const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAppSelector(selectUserAuth);

  if (!isAuthenticated) {
    return <Navigate to="/"/>;
  }

  return <>{children}</>;
};
