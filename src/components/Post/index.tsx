import { useState, FormEvent } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';

import type { PostType } from '../../types/common';

import styles from './styles.module.scss';

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState([
    {
      id: 1,
      text: 'Post muito bacana, hein?!',
    },
  ]);
  const [newCommentValue, setNewCommentValue] = useState('');

  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateDifferenceFromNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateComment = (e: FormEvent) => {
    e.preventDefault();

    const newComment = {
      id: comments.length + 1,
      text: newCommentValue,
    };

    setComments([...comments, newComment]);
    setNewCommentValue('');
  };

  const deleteComment = (commentId: number) => {
    const newCommentsArray = comments.filter((comment) => comment.id !== commentId);
    setComments(newCommentsArray);
  };

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar outlined src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
          {publishedDateDifferenceFromNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((line, index) => {
          switch (line.type) {
            case 'anchor':
              return (
                <p key={index}>
                  <a href='#'>{line.text}</a>
                </p>
              );
            default:
              return <p key={index}>{line.text}</p>;
          }
        })}
      </div>

      <form onSubmit={handleCreateComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          value={newCommentValue}
          onChange={(e) => setNewCommentValue(e.target.value)}
          placeholder='Deixe um comentário...'
          required
        />

        <footer>
          <button type='submit' disabled={!newCommentValue}>
            Comentar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment key={comment.id} content={comment} onDeleteComment={deleteComment} />
        ))}
      </div>
    </article>
  );
}
