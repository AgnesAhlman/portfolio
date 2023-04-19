import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from './Dropdown.module.css';
import { allTags } from '../../pages/projectPage/projects';
import { BsCheck2 } from 'react-icons/bs';

interface Props {
  activeTag: string;
  filterProjects: (tag: string) => void;
}

const DropdownMenu: React.FC<Props> = ({ activeTag, filterProjects }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className={styles.button}>
        Filter
      </Dropdown.Toggle>

      <Dropdown.Menu className={styles.menu}>
        {allTags.map((tag) => (
          <Dropdown.Item
            href="#/action-1"
            className={`${styles.item} ${activeTag === tag ? styles.active : ''}`}
            key={tag}
            onClick={() => {
              filterProjects(tag);
            }}
          >
            {tag}
            {activeTag === tag && <BsCheck2 className={styles.icon} />}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownMenu;
