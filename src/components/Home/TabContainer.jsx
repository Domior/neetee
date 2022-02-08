import styled from '@emotion/styled';
// import { NavLink } from 'react-router-dom';

import allItems from '@icons/allItems.svg';
import popolatItems from '@icons/popolatItems.svg';
import iconItems from '@static/iconItems.jpg';
import iconOpt from '@static/iconOpt.jpg';

const tabsItems = [
  { name: 'Все товары', img: allItems },
  { name: 'Трендовые товары', img: popolatItems },
  { name: 'Товары 1688.com', img: iconItems },
  { name: 'Оптовые товары', img: iconOpt },
];

const TabList = styled.ul`
  display: flex;
  list-style: none;
`;

const Button = styled.button`
  height: 60px;
  font-size: var(--font-size-medium);
  width: 234px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  background-color: var(--bgc-button);
  color: var(--color-white);
`;

const ListItem = styled.li`
  display: flex;
`;
const Image = styled.img`
  margin-right: 10px;
`;

const Tabs = () => {
  return (
    <TabList>
      {tabsItems.map(({ name, img }) => (
        <ListItem key={name}>
          <Button type="button">
            <Image src={img} alt="" />
            {name}
          </Button>
        </ListItem>
      ))}
    </TabList>
  );
};
export default Tabs;
