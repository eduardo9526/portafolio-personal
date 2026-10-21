import { Navigate } from 'react-router-dom';
import { getAuthSession } from '../utils/localStorage';

export const ProtectedRoute = ({ children }) => {
  const user = getAuthSession();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};