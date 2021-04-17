export interface ItemProps {
  id: string;
  idTitle: string;
  datePublication: number;
  theme: string;
  title: string;
  subtitle: string;
}

export interface SwiperItemProps {
  item: ItemProps;
  index: number;
}
