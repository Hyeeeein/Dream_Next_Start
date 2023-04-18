"use client"; // 클라이언트 컴포넌트 명시

import React, { useState } from "react";

const Counter = () => {
  console.log("안녕! - 클라");

  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        숫자 증가 시키기
      </button>
    </div>
  );
};

export default Counter;
