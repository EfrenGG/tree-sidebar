import { Link } from './models';

export interface MenuItem {
  scope: string;
  id: string;
  app: string;
  status: string;
  name: string;
  type: string;
  parent: string;
  score: string;
  image: string;
  links: Link[];
  icon?: string;
  children?: MenuItem[];
  active?: boolean;
  isLeaf?: boolean;
}
