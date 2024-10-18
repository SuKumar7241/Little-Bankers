import React, { useState, useEffect } from 'react';
import './LoadingPage.css';

const LoadingPage = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 1000);
          return 100;
        }
        const newProgress = oldProgress + 10;
        return Math.min(newProgress, 100);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [onLoadingComplete]);

  return (
    <div className="loading-page">
      <div className="background">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </div>
      <div className="content">
        <h1 className="title">KidsCash Academy</h1>
        <div className="icons">
          <div className="coin coin1">💰</div>
          <div className="coin coin2">💰</div>
          <div className="coin coin3">💰</div>
          <div className="piggy-bank">🐷</div>
          <div className="calculator">🧮</div>
        </div>
        <div className="loading-bar">
          <div className="loading-progress" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="loading-text">Loading... {progress}%</p>
      </div>
    </div>
  );
};

export default LoadingPage;
