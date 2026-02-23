"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CounterLoading = ({ onComplete }: { onComplete?: () => void }) => {
  const [count, setCount] = useState(10);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;

    // interval for countdown
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          if (onComplete) onComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000); // Standard countdown (1s per text)

    return () => clearInterval(timer);
  }, [onComplete, started]);

  // Digit patterns (3x5 grid)
  const digits: Record<number, number[]> = {
    0: [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
    1: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    2: [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
    3: [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    4: [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
    5: [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    6: [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    7: [1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    8: [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    9: [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    10: [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1] // Just a pattern for 10 or 'A' or smiley? Let's show 9 for 10 to keep it simple, or map >9 to 9.
  };

  // Safe get pattern: clamps to 9 if > 9 (or handle 10 differently if desired)
  const currentPattern = digits[count === 10 ? 10 : count > 9 ? 9 : count] || digits[0];

  return (
    <StyledWrapper>
      {!started ? (
        <LaunchButton
          as={motion.button}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onClick={() => setStarted(true)}
        >
          Launch Webpage
        </LaunchButton>
      ) : (
        <div id="timer">
          {currentPattern.map((isActive, i) => (
            <div key={i} className={isActive ? "active" : ""} />
          ))}
        </div>
      )}
    </StyledWrapper>
  );
};

const LaunchButton = styled.button`
  padding: 1.2rem 3.5rem;
  font-size: 1.15rem;
  font-weight: 400;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  cursor: pointer;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  letter-spacing: 6px;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(135, 206, 235, 0.2),
      transparent
    );
    transition: all 0.6s ease;
  }

  &:hover {
    border-color: rgba(135, 206, 235, 0.5);
    box-shadow: 0 0 30px rgba(135, 206, 235, 0.3), inset 0 0 15px rgba(135, 206, 235, 0.1);
    transform: translateY(-4px);
    color: skyblue;
    
    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(2px) scale(0.98);
  }
`;

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #050510;

  #timer {
    display: grid;
    grid-template-columns: repeat(3, 25px);
    grid-template-rows: repeat(5, 25px);
    gap: 10px;
  }

  #timer > div {
    background-color: rgba(135, 206, 235, 0.1);
    border-radius: 5px;
    transition: background-color 0.2s ease;
  }

  #timer > div.active {
    background-color: skyblue;
    box-shadow: 0 0 10px skyblue;
  }
`;

export default CounterLoading;
