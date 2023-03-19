export interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}

export interface Content {
  text: string;
  type: 'paragraph' | 'anchor';
}

export interface PostType {
  id: number;
  author: Author;
  content: Content[];
  publishedAt: Date;
}
