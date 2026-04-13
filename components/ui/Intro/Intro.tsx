"use client";

import { useEffect, useState } from "react";
import styles from "./Intro.module.css";

export default function IntroLoader({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(p + Math.random() * 2.5 + 0.8, 100);
      });
    }, 55);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const t1 = setTimeout(() => setLeaving(true), 400);
      const t2 = setTimeout(() => onComplete?.(), 1000);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [progress, onComplete]);

  // 0–100 progress mapped to stalk height (starts small, grows tall)
  // stalkH: 0 = tiny sprout, 1 = full grown
  const t = progress / 100;

  // Stalk: grows from y=172 upward. Min height = 30px (sprout), max = 148px
  const stalkHeight = 30 + t * 118;
  const stalkTop = 172 - stalkHeight;

  // Leaves appear progressively
  const leaf1Opacity = Math.max(0, Math.min(1, (t - 0.2) / 0.2));
  const leaf2Opacity = Math.max(0, Math.min(1, (t - 0.45) / 0.2));
  const leaf3Opacity = Math.max(0, Math.min(1, (t - 0.65) / 0.2));

  // Cob appears after 80%
  const cobOpacity = Math.max(0, Math.min(1, (t - 0.8) / 0.15));
  // Silk (top threads) after 90%
  const silkOpacity = Math.max(0, Math.min(1, (t - 0.88) / 0.12));

  // Leaf positions relative to stalk (% of stalk height from bottom)
  const l1y = stalkTop + stalkHeight * 0.72;
  const l2y = stalkTop + stalkHeight * 0.48;
  const l3y = stalkTop + stalkHeight * 0.28;

  // Cob position
  const cobY = stalkTop + stalkHeight * 0.38;

  return (
    <div className={`${styles.wrap} ${leaving ? styles.leaving : ""}`}>
      <div className={styles.scene}>
        <svg
          viewBox="0 0 160 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.svg}
        >
          {/* Ground */}
          <ellipse
            cx="80"
            cy="178"
            rx="38"
            ry="5"
            fill="#b8dea0"
            opacity="0.45"
          />
          <line
            x1="20"
            y1="176"
            x2="140"
            y2="176"
            stroke="#6aab28"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.35"
          />

          {/* === MAIN STALK === */}
          {/* Slight curve — corn leans a tiny bit */}
          <path
            d={`M80 172 C79 ${stalkTop + stalkHeight * 0.6} 81 ${stalkTop + stalkHeight * 0.3} 80 ${stalkTop}`}
            stroke="#4a8f14"
            strokeWidth="4"
            strokeLinecap="round"
            style={{ transition: "d 0.25s ease" }}
          />

          {/* === LEAF 1 (bottom-left) === */}
          <g style={{ opacity: leaf1Opacity, transition: "opacity 0.4s ease" }}>
            <path
              d={`M80 ${l1y} C64 ${l1y - 14} 46 ${l1y - 8} 50 ${l1y - 22} C56 ${l1y - 34} 76 ${l1y - 18} 80 ${l1y - 4}`}
              fill="#78be20"
              style={{ transition: "d 0.25s ease" }}
            />
          </g>

          {/* === LEAF 2 (mid-right) === */}
          <g style={{ opacity: leaf2Opacity, transition: "opacity 0.4s ease" }}>
            <path
              d={`M80 ${l2y} C96 ${l2y - 14} 114 ${l2y - 8} 110 ${l2y - 22} C104 ${l2y - 34} 84 ${l2y - 18} 80 ${l2y - 4}`}
              fill="#8dd428"
              style={{ transition: "d 0.25s ease" }}
            />
          </g>

          {/* === LEAF 3 (upper-left) === */}
          <g style={{ opacity: leaf3Opacity, transition: "opacity 0.4s ease" }}>
            <path
              d={`M80 ${l3y} C64 ${l3y - 16} 48 ${l3y - 10} 52 ${l3y - 24} C58 ${l3y - 36} 77 ${l3y - 20} 80 ${l3y - 5}`}
              fill="#70b81a"
              style={{ transition: "d 0.25s ease" }}
            />
          </g>

          {/* === CORN COB === */}
          <g style={{ opacity: cobOpacity, transition: "opacity 0.5s ease" }}>
            {/* Husk leaves behind cob */}
            <path
              d={`M80 ${cobY - 4} C72 ${cobY - 2} 68 ${cobY + 10} 72 ${cobY + 20} C74 ${cobY + 26} 78 ${cobY + 22} 80 ${cobY + 18}`}
              fill="#6aab1e"
              opacity="0.9"
            />
            <path
              d={`M80 ${cobY - 4} C88 ${cobY - 2} 92 ${cobY + 10} 88 ${cobY + 20} C86 ${cobY + 26} 82 ${cobY + 22} 80 ${cobY + 18}`}
              fill="#78be20"
              opacity="0.9"
            />
            {/* Cob body */}
            <rect
              x="74"
              y={cobY}
              width="12"
              height="22"
              rx="6"
              fill="url(#cobGrad)"
            />
            {/* Kernel rows */}
            {[3, 7, 11, 15, 19].map((dy) =>
              [76, 79, 82].map((dx) => (
                <circle
                  key={`${dy}-${dx}`}
                  cx={dx}
                  cy={cobY + dy}
                  r="1.3"
                  fill="rgba(255,200,40,0.65)"
                />
              )),
            )}
          </g>

          {/* === SILK (top tassel) === */}
          <g style={{ opacity: silkOpacity, transition: "opacity 0.4s ease" }}>
            <path
              d={`M78 ${stalkTop} C76 ${stalkTop - 10} 74 ${stalkTop - 18} 72 ${stalkTop - 24}`}
              stroke="#c8a030"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d={`M80 ${stalkTop} C80 ${stalkTop - 12} 80 ${stalkTop - 20} 80 ${stalkTop - 28}`}
              stroke="#d4b040"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d={`M82 ${stalkTop} C84 ${stalkTop - 10} 86 ${stalkTop - 18} 88 ${stalkTop - 24}`}
              stroke="#c8a030"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d={`M79 ${stalkTop} C77 ${stalkTop - 8} 75 ${stalkTop - 14} 76 ${stalkTop - 20}`}
              stroke="#bfa040"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.7"
            />
            <path
              d={`M81 ${stalkTop} C83 ${stalkTop - 8} 85 ${stalkTop - 14} 84 ${stalkTop - 20}`}
              stroke="#bfa040"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.7"
            />
          </g>

          <defs>
            <linearGradient
              id="cobGrad"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform={`rotate(0) translate(0, ${cobY})`}
            >
              <stop stopColor="#f0c040" />
              <stop offset="1" stopColor="#c88010" />
            </linearGradient>
          </defs>
        </svg>

        {/* Progress bar — sits right next to the plant */}
        <div className={styles.barWrap}>
          <div className={styles.barTrack}>
            <div
              className={styles.barFill}
              style={{ height: `${progress}%` }}
            />
          </div>
          <span className={styles.percent}>{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
}
