import styles from './style.module.css';

export function Avatar({ src, alt, hasBorder = true }) {
  return (
    <img
      className={`${styles.avatar} ${hasBorder && styles['avatar--border']}`}
      src={src}
      alt={alt}
    />
  );
}
