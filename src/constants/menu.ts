interface IMenu {
  path: string;
  title: string;
}

export const menu: IMenu[] = [
  { path: "/games", title: "Игры" },
  { path: "/networks", title: "Соц.сети" },
  { path: "/help", title: "Помощь" },
  { path: "/advantage", title: "Наши плюсы" },
  { path: "/about", title: "О нас" },
];
