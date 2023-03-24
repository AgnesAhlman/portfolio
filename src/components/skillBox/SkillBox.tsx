import React, { type PropsWithChildren } from 'react';
import styles from './SkillBox.module.css';

interface ServiceProps extends PropsWithChildren {
  backgroundColor: string;
  title: string;
  list: string[];
  icon: JSX.Element;
}

const SkillBox: React.FC<ServiceProps> = ({ title, icon, backgroundColor, list }) => {
  return (
    <div style={{ backgroundColor }} className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <h5 className={styles.title}>{title}</h5>
      {list.map((item) => (
        <li key={item} className={styles.list}>
          {item}
        </li>
      ))}
    </div>
  );
};

export default SkillBox;
