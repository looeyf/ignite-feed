import { ImgHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  outlined?: boolean;
}

export function Avatar(props: AvatarProps) {
  return <img className={props.outlined ? styles.avatarOutlined : styles.avatar} {...props} />;
}
