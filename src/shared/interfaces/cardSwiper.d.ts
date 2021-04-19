export interface ItemProps {
  id: string;
  idTitle: string;
  idCategory: string;
  // TODO: A Valider
  leftLineColor: string;
  rightLineColor: string;
  // ->
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
