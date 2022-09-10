import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar';
import styles from './style.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.sidebar__cover}
        src='https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        alt='User cover image'
      />

      <div className={styles.sidebar__profile}>
        <Avatar src='https://avatars.githubusercontent.com/u/22968298?v=4' alt='User avatar' />

        <strong>Luís Oliveira</strong>
        <span>Web Developer</span>
      </div>

      <footer className={styles.sidebar__footer}>
        <a href='#'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
