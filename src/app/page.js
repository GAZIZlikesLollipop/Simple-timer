"use client"
import styles from "./page.module.css";
import React, { useState } from 'react';
import NumberRangeTextField from "@/app/text_field";

export default function Home() {

  return (
      <div className={styles.background}>
          <div className={styles.textFieldContainer}>
              <NumberRangeTextField max={60} min={0} placeHolder={"hr"}></NumberRangeTextField>
              <NumberRangeTextField max={60} min={0} placeHolder={"min"}></NumberRangeTextField>
              <NumberRangeTextField max={60} min={0} placeHolder={"sec"}></NumberRangeTextField>
          </div>
      </div>
  );
}