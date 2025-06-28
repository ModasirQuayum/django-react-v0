import React, { useEffect, useState } from 'react';
import { useNavigation } from 'react-router-dom';

const TopBarProgress = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    if (navigation.state === 'loading') {
      setIsVisible(true);
      setStartTime(Date.now());
    } else {
      if (isVisible) {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = 2500 - elapsedTime;
        const delay = remainingTime > 0 ? remainingTime : 0;

        const timer = setTimeout(() => {
          setIsVisible(false);
        }, delay);

        return () => clearTimeout(timer);
      }
    }
  }, [navigation.state]);

  return (
    <>
      {isVisible && (
        <div className="fixed top-0 left-0 w-full h-1 bg-blue-500 animate-pulse z-50"></div>
      )}
    </>
  );
};

export default TopBarProgress;
