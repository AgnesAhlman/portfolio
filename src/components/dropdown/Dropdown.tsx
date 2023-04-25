import React from 'react';
import styles from './Dropdown.module.css';
import { allTags } from '../../pages/projectPage/projects';
import { BsCheck2 } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';

interface Props {
  activeTag: string;
  filterProjects: (tag: string) => void;
}

const DropdownMenu: React.FC<Props> = ({ activeTag, filterProjects }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.button}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        FILTER PROJECTS: <span className={styles.activeTag}>{activeTag}</span> <IoMdArrowDropdown />
      </button>

      <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        {allTags.map((tag) => (
          <li
            className={`${styles.item} ${activeTag === tag ? styles.active : ''}`}
            key={tag}
            onClick={() => {
              setIsOpen(false);
              filterProjects(tag);
            }}
          >
            {tag}
            {activeTag === tag && <BsCheck2 className={styles.icon} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
