import React, { useState, useRef, useEffect, MouseEventHandler } from 'react';
import styles from './Buttons.module.css';

interface IPosition {
  x: number;
  y: number;
}

interface IGradientSearchBtn {
  active: boolean;
  children: React.ReactNode;
  handlerFunc: MouseEventHandler;
}

export const GradientSearchButton: React.FC<IGradientSearchBtn> = ({
  children,
  active,
  handlerFunc,
}: IGradientSearchBtn) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [position, setPosition] = useState<IPosition | null>(null);
  useEffect(() => {
    const ref = buttonRef;
    ref.current?.addEventListener('mousemove', handleMouseMove);
    return () => ref.current?.removeEventListener('mousemove', handleMouseMove);
  });

  function handleMouseMove(e: MouseEvent) {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      setPosition({ x: e.clientX - rect.x, y: e.clientY - rect.y });
    }
  }

  return (
    <button
      ref={buttonRef}
      className={`${styles.gradientSearchBtn} ${
        active ? styles.iconBtnWithText : styles.iconBtn
      }`}
      onClick={handlerFunc}
    >
      <span className={styles.gradientContainer}>
        <span
          className={styles.gradient}
          style={
            {
              backgroundPosition:
                'calc((100 - var(--mouse-x, 0)) * 1%) calc((100 - var(--mouse-y, 0)) * 1%)',
              '--mouse-x': position?.x,
              '--mouse-y': position?.y,
            } as React.CSSProperties
          }
        ></span>
      </span>
      <span
        style={{
          display: 'block',
          position: 'relative',
          pointerEvents: 'none',
        }}
      >
        {children}
      </span>
    </button>
  );
};

export const GradientButton: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  return <button ref={buttonRef}></button>;
};
