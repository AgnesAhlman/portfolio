import React, { type PropsWithChildren } from 'react';
import styles from './Button.module.css';

type ButtonType = 'about' | 'skills';
interface ButtonProps extends PropsWithChildren {
  type: ButtonType;
  onClick?: () => void;
}

interface ButtonData {
  backgroundColor: string;
  textColor: string;
}

const data: Record<ButtonType, ButtonData> = {
  about: {
    backgroundColor: '#2b2d3c',
    textColor: 'var(--details-color)',
  },
  skills: {
    backgroundColor: 'var(--details-color)',
    textColor: '#282a3c',
  },
};

const Button = (props: ButtonProps): JSX.Element => {
  const { backgroundColor, textColor } = data[props.type];

  return (
    <button
      className={styles.button}
      style={{ backgroundColor, color: textColor }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
