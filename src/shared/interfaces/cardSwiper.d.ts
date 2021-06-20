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

export interface CategoryProps {
  darkColor: string;
  lightColor: string;
  title: string;
  logo: string;
  id: string;
  description: string;
  active: boolean;
}

export interface SwiperItemProps {
  item: ItemProps;
  index: number;
  category: CategoryProps | undefined;
}
