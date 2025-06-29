// src/components/ProgressBar.jsx
import NProgress from 'nprogress';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'nprogress/nprogress.css'; // Or use your custom CSS

const ProgressBar = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    NProgress.set(0.4);

    // Simulate delay (optional: useful for dev)
    const timeout = setTimeout(() => {
      NProgress.done();
    }, 600); // adjust timing as needed

    return () => clearTimeout(timeout);
  }, [location]);

  return null;
};

export default ProgressBar;
