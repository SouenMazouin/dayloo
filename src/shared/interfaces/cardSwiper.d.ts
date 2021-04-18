export interface ItemProps {
  id: string;
  idTitle: string;
  idCategory: string;
  datePublication: number;
  theme: string;
  title: string;
  subtitle: string;
  highlight: { type: string; content: string };
}

export interface SwiperItemProps {
  item: ItemProps;
  index: number;
}
