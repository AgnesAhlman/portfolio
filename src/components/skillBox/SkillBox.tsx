import React, { type PropsWithChildren } from 'react';
import styles from './SkillBox.module.css';
import { BsPatchCheckFill } from 'react-icons/bs';

interface ServiceProps extends PropsWithChildren {
  backgroundColor: string;
  title: string;
  list: string[];
  color: string;
}

const SkillBox: React.FC<ServiceProps> = ({ title, backgroundColor, list, color }) => {
  return (
    <div style={{ backgroundColor }} className={styles.container}>
      <h5 className={styles.title}>{title}</h5>
      <div className={styles.list}>
        {list.map((item) => (
          <div className={styles.listItem} key={item}>
            <BsPatchCheckFill style={{ color }} width={16} height={16} />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBox;
