import styles from './styles.module.scss';

export function Avatar(props) {
  return (
    <img
      className={props.outlined ? styles.avatarOutlined : styles.avatar}
      src={props.src}
      alt='Avatar de usuário'
    />
  );
}
