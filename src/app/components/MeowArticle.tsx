"use client";

import React, { useEffect, useState } from "react";
import style from "./MeowArticle.module.css";

const MeowArticle = () => {
  const [text, setText] = useState<string>("데이터 준비중...");

  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com")
      .then((data) => data.json())
      .then((data) => setText(data.data[0]));
  }, []);

  return <article className={style.article}>{text}</article>;
};

export default MeowArticle;
