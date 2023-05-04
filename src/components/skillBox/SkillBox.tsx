import React, { useState, type PropsWithChildren } from 'react';

import styles from './SkillBox.module.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import useViewport from '../../hooks/useViewport';

interface ServiceProps extends PropsWithChildren {
  // backgroundColor: string;
  title: string;
  list: string[];
  color: string;
}

const SkillBox: React.FC<ServiceProps> = ({ title, list, color }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useViewport();

  return (
    <div className={styles.container}>
      {isMobile ? (
        <button
          className={styles.button}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {title}
          <div className={styles.arrow}>{isOpen ? <RiArrowUpSFill /> : <RiArrowDownSFill />}</div>
        </button>
      ) : (
        <h5 className={styles.title}>{title}</h5>
      )}
      <div className={`${styles.list} ${isOpen ? styles.listOpen : ''}`}>
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
