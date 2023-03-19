import { useState } from 'react';

import { Avatar } from '../Avatar';
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './styles.module.scss';

interface CommentProps {
  content: {
    id: number;
    text: string;
  };
  onDeleteComment: (commentId: number) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeComment = () => {
    setLikeCount(likeCount + 1);
  };

  const handleDeleteComment = (commentId: number) => {
    onDeleteComment(commentId);
  };

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

            <button onClick={() => handleDeleteComment(content.id)} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content.text}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
