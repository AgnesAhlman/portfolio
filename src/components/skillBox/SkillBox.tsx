import React, { useState, type PropsWithChildren } from 'react';
import styles from './SkillBox.module.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import { RiArrowDownSFill } from 'react-icons/ri';

interface ServiceProps extends PropsWithChildren {
  // backgroundColor: string;
  title: string;
  list: string[];
  color: string;
}

const SkillBox: React.FC<ServiceProps> = ({ title, list, color }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <h5
        className={styles.title}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {title}{' '}
        <div className={styles.arrow}>
          <RiArrowDownSFill />
        </div>
      </h5>
      <div className={styles.list}>
        {list.map((item) => (
          <div className={`${styles.listItem} ${isOpen ? styles.open : ''}`} key={item}>
            <BsPatchCheckFill style={{ color }} width={16} height={16} className={styles.icon} />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBox;
