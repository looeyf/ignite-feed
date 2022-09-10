import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';
import styles from './style.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src='https://avatars.githubusercontent.com/u/22968298?v=4'
        alt='User image'
      />

      <div className={styles.comment__box}>
        <div className={styles.comment__box__content}>
          <header>
            <div className={styles.comment__box__content__author}>
              <strong>Luís Oliveira</strong>
              <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:30'>
                Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
