import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const list = [
  'Одежда, обувь, аксессуары',
  'Товары для детей и игрушки',
  'Одежда, обувь, аксессуары1',
  'Детская одежда и обувь',
  'Часы и украшения',
  'Детская одежда и обувь1',
];
const ProductNavList = styled.ul`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 1170px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 45px;
  padding-bottom: 45px;
  background-color: #f5f5f5;
`;
const ProdoctItem = styled.li`
  flex-basis: calc((100% - 3 * 30px) / 3);
`;
const Link = styled(NavLink)`
  color: var(--color-black);
  text-decoration: none;
`;

const SearchList = () => {
  return (
    <ProductNavList>
      {list.map((item) => (
        <ProdoctItem key={item}>
          <Link to="/">{item}</Link>
        </ProdoctItem>
      ))}
    </ProductNavList>
  );
};
export default SearchList;
