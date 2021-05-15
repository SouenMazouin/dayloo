export interface ItemProps {
  id: string;
  idTitle: string;
  idCategory: string;
  lineColor: string; // TODO: ADD in model
  datePublication: number;
  theme: string;
  title: string;
  subtitle: string;
  highlight: { type: string; content: string };
  formula: string; // TODO: ADD in model
}

export interface SwiperItemProps {
  item: ItemProps;
  index: number;
}
