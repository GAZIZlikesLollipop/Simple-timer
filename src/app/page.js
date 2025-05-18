"use client"
import styles from "./page.module.css";
import React, { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  return (
      <div className={styles.background}>
        <header>{count}</header>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
  );
}
