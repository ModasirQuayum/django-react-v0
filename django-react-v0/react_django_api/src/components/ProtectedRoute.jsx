import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt'; 
import authService from '../api/auth';
import { ACCESS_TOKEN } from '../constants';
import { setStatus } from '../store/authSlice';

export default function Protected({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);


  const authenticateUser = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      dispatch(setStatus(false));
      navigate('/login');
      return;
    }

    try {
      const decoded = decodeToken(token);
      //const currentTime = Date.now() / 1000; 
      // !decoded || decoded.exp < currentTime
      if (!decoded) {
        const response = await authService.getRefreshToken();
        if (response.status === 200 && response.data.access) {
          localStorage.setItem(ACCESS_TOKEN, response.data.access);
          dispatch(setStatus(true));
        } else {
          dispatch(setStatus(false));
          navigate('/login');
          return;
        }
      } else {
        dispatch(setStatus(true));
      }
    } catch (error) {
      dispatch(setStatus(false));
      navigate('/login');
      return;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
