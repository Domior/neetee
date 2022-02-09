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
  width: 1170px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 45px;
  padding-bottom: 45px;
  background-color: #f5f5f5;
`;
const ProdoctItem = styled.li`
  flex-basis: calc((100% - 3 * 30px) / 2);
`;
const SearchList = () => {
  return (
    <ProductNavList>
      {list.map((item) => (
        <ProdoctItem key={item}>
          <NavLink to="/">{item}</NavLink>
        </ProdoctItem>
      ))}
    </ProductNavList>
  );
};
export default SearchList;
