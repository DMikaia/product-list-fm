export type Item = {
  id: string;
  image: {
    [key: string]: string;
  };
  name: string;
  category: string;
  price: number;
};
