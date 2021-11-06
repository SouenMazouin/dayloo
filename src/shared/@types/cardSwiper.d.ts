export type ItemProps = {
  id: string;
  idTitle: string;
  idCategory: string;
  datePublication: number;
  theme: string;
  title: string;
  subtitle: string;
  highlight: { type: string; content: string };
  blocks: [
    { type: string; highlight: { type: string; content: string }; text: string; example: string },
  ];
  source: string;
  isLoading?: boolean;
};

export type CategoryProps = {
  darkColor: string;
  lightColor: string;
  title: string;
  logo: string;
  id: string;
  description: string;
  active: boolean;
};

export type SwiperItemProps = {
  item: ItemProps;
  index: number;
  category: CategoryProps;
};
