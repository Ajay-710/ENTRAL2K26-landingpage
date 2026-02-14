"use client";
import React from "react";
import styled from "styled-components";

const CounterLoading = ({ onComplete }: { onComplete?: () => void }) => {
  const [count, setCount] = React.useState(10);

  React.useEffect(() => {
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
  }, [onComplete]);

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
  const currentPattern = digits[count > 9 ? 9 : count] || digits[0];

  return (
    <StyledWrapper>
      <div id="timer">
        {currentPattern.map((isActive, i) => (
          <div key={i} className={isActive ? "active" : ""} />
        ))}
      </div>
    </StyledWrapper>
  );
};


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
