"use client";
import React, { useEffect, useRef, useState } from "react";
import { title } from "@/components/primitives";
import { useTheme } from "next-themes";
import "@/app/style.css";

export default function Home() {
  const [stars, setStars] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    // 星を生成する関数
    if (theme == "dark") {
      const createStar = () => {
        const minSize = 1;
        const maxSize = 2;
        const size = Math.random() * (maxSize - minSize) + minSize;
        const star = {
          size,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
        };
        return star;
      };

      // 最初に500個の星を生成
      const initialStars = Array(500).fill().map(createStar);
      setStars(initialStars);
    }
  }, [theme]);

  return (
    <section
      className={`
        ${theme === "dark" ? "stars" : ""}
         flex flex-col items-center justify-center gap-4 py-8 md:py-10`}
    >
      {stars.map((star, i) => (
        <span
          key={i}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: star.left,
            top: star.top,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>テスト&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>テスト&nbsp;</h1>
        <br />
        <h1 className={title()}></h1>
      </div>
    </section>
  );
}
