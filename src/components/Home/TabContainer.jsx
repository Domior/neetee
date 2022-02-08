import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import allItems from '@icons/allItems.svg';
import popolatItems from '@icons/popolatItems.svg';
import iconItems from '@static/iconItems.jpg';
import iconOpt from '@static/iconOpt.jpg';

// const tabsItems = [
//   { name: 'Все товары', img: allItems },
//   { name: 'Трендовые товары', img: popolatItems },
//   { name: 'Товары 1688.com', img: iconItems },
//   { name: 'Оптовые товары', img: iconOpt },
// ];

const TabList = styled.ul`
  display: flex;
  list-style: none;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  height: 60px;
  font-size: var(--font-size-medium);
  width: 234px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  background-color: var(--color-white);
  color: var(--color-blue);
  fill: var(--color-blue);

  &.active {
    color: var(--color-white);
    background-color: var(--color-blue);
  }
`;

const ListItem = styled.li`
  display: flex;
  margin-right: 10px;
`;
const Image = styled.img`
  margin-right: 10px;
`;

const Tabs = () => {
  return (
    <TabList>
      <ListItem>
        <Link to="/products">
          <Image src={allItems} alt="" />
          Все товары
        </Link>
        <Link to="/products">
          <Image src={popolatItems} alt="" />
          Трендовые товары
        </Link>
        <Link to="/products">
          <Image src={iconItems} alt="" />
          Товары 1688.com
        </Link>
        <Link to="/products">
          <Image src={iconOpt} alt="" />
          Оптовые товары
        </Link>
      </ListItem>
    </TabList>
  );
};
export default Tabs;
