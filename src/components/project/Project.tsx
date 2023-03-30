import React, { type PropsWithChildren } from 'react';
import styles from './Project.module.css';

interface ServiceProps extends PropsWithChildren {
  title: string;
  tags: string[];
  image: string;
}

const Project: React.FC<ServiceProps> = ({ title, tags, image, children }) => (
  <div className={styles.container}>
    <div className={`${styles.imgContainer} ${styles.contentBox}`}>
      <img src={image} className={styles.img} alt="project-img" />
    </div>
    <div className={`${styles.textContainer} ${styles.contentBox}`}>
      <h5 className={styles.title}>{title}</h5>
      <div>{children}</div>
      <div className={styles.tagContainer}>
        {tags.map((tag) => (
          <li key={tag} className={styles.tag}>
            {tag}
          </li>
        ))}
      </div>
    </div>
  </div>
);

export default Project;
