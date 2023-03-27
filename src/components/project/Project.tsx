import React, { type PropsWithChildren } from 'react';
import styles from './Project.module.css';

interface ServiceProps extends PropsWithChildren {
  title: string;
  tags: string[];
  image: string;
}

const Project: React.FC<ServiceProps> = ({ title, tags, image, children }) => (
  <>
    <img src={image} className={styles.img} alt="project-img" />
    <h5 className={styles.title}>{title}</h5>
    <p>{children}</p>
    <div className={styles.tags}>
      {tags.map((tag) => (
        <li key={tag} className={styles.tag}>
          {tag}
        </li>
      ))}
    </div>
  </>
);

export default Project;
