import { Avatar } from '../Avatar';

import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './styles.module.scss';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src='https://github.com/looeyf.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luís Oliveira</strong>
              <time title='11 de Maio de 2022 às 08:13' dateTime='2022-05-11 08:13:30'>
                Publicado há 1h
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
