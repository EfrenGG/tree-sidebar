import Link from './Link';

export default interface Product {
  scope: string;
  id: string;
  brand: string;
  genre: string;
  group: string;
  line: string;
  shape: string;
  amount: number;
  silo: string;
  code: string;
  desc: string;
  image: string;
  publicPrice: number;
  offerPrice: number;
  discount: number;
  links: Link[];
}
