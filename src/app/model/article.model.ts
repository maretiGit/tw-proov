import {Image} from './image.model';

export class Article {
  id: string;
  title: string;
  author: string;
  date: string;
  images: Image[];
  intro: string;
  body: string;
  tags: string[];
}

