import {Image} from './image.model';

export class List {
  list: ListItem[];
  stats: ListStats;
}

export class ListItem {
  author: string;
  body: string;
  boolean: boolean;
  date: string;
  email: string;
  firstname: string;
  id: string;
  image: Image;
  images: Image[];
  intro: string;
  personal_code: number;
  phone: string;
  sex: string;
  surname: string;
  tags: string[];
  title: string;

  dob: string;
  isOpen: boolean;
}

export class ListStats {
  limit: number;
  offset: number;
  results: number;
  total: number;
}
