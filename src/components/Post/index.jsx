import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './style.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.post__header}>
        <div className={styles.post__author}>
          <Avatar src='https://avatars.githubusercontent.com/u/22968298?v=4' alt='User image' />

          <div className={styles.post__author__info}>
            <strong>Luís Oliveira</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:30'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.post__content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento
          da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href='#'>jane.design/doctorcare</a>
        </p>
        <p>
          <a href='#'>#novoprojeto</a> <a href='#'>#nlw</a> <a href='#'>#rocketseat</a>
        </p>
      </div>

      <form className={styles.post__comment__form}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário' />

        <footer>
          <button type='submit'>Comentar</button>
        </footer>
      </form>

      <div className={styles.post__comment__list}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
