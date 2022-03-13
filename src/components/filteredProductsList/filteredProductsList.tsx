import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '../../bll/store';
import { setMaxTypeAC, setMinTypeAC } from '../../bll/productReduser';
import cl from './FilteredProductsList.module.css';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import DensitySmallOutlinedIcon from '@mui/icons-material/DensitySmallOutlined';
import arrows from './../../assets/iconOD.png';
import CartProduct from '../cartProduct/CartProduct';
import './style.css';


// const ProductsList

const FilteredProductsList = () => {
  const dispatch = useDispatch();
  let productsList = useSelector<RootStateType, Array<any>>(state => state.order.listSelectedProduct);
  let min = useSelector<RootStateType, number>(state => state.products.filterMin);
  let max = useSelector<RootStateType, number>(state => state.products.filterMax);
  const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setMinTypeAC(e.currentTarget.valueAsNumber));
  };
  const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.valueAsNumber;
    if (!isFinite(value)) return;
    dispatch(setMaxTypeAC(value));
  };
  const [gridView, setGridView] = useState(true);
  const [rowView, setRowView] = useState(false);
  const [countColumn, setCountColumn] = useState('repeat(4, 1fr)');
  const gridViewHandler = () => {
    setGridView(true);
    setRowView(false);
  };
  const rowViewHandler = () => {
    setGridView(false);
    setRowView(true);
  };
  let ollProducts = productsList;

  const windowWidth = window.innerWidth;
  useEffect(() => {
    if (windowWidth <= 992) setCountColumn('repeat(3, 1fr)');
    if (windowWidth <= 665) setCountColumn('repeat(2, 1fr)');
  }, [windowWidth]);
  const viewsStyle = {
    display: gridView ? 'grid' : 'block',
    gridTemplateColumns: countColumn,
    gridGap: '5px',
  };
  if(min){
    ollProducts = ollProducts.filter(p=> Number(p.itemPrise) >= Number(min))
  }
  if(max){
    ollProducts = ollProducts.filter(p=> Number(p.itemPrise) >= Number(max))
  }
  console.log('productsList', productsList);
  console.log('ollProducts', ollProducts);
  return (
    <div className={cl.container}>
      <h3 className={cl.titleFilters}>Результаты поиска</h3>
      <br />  <h4 className={cl.titlePrice}>Диапазон цены</h4>
      <div className={cl.rowFilters}>
        <div className={cl.priceFilter}>
          <label className={cl.priceMin}> от
            <input type={'number'} value={min} onChange={onChangeMin} />
            <span>₽</span>
          </label>
          <img src={arrows} alt='arrows' className={cl.arrows} />
          <label className={cl.priceMax}> до
            <input type={'number'} value={max} min={min} onChange={onChangeMax} />
            <span>₽</span>
          </label>
        </div>
        <div className={cl.checkboxWrap}>
          <label className='custom-big-checkbox'>
            <input type='checkbox' name='otk' className='align-self-center' />
            <span className='custom-big-checkbox__checkbox'></span>
            <span className='labelValue'>По рейтингу</span>
          </label>
          <label className='custom-big-checkbox'>
            <input type='checkbox' name='otk' className='align-self-center' />
            <span className='custom-big-checkbox__checkbox'></span>
            <span className='labelValue'>По отзывам</span>
          </label>
          <label className='custom-big-checkbox'>
            <input type='checkbox' name='otk' className='align-self-center' />
            <span className='custom-big-checkbox__checkbox'></span>
            <span className='labelValue'>По покупке</span>
          </label>
        </div>
        <div className={cl.viewWrap}>
          <p>Показать в виде</p>
          <GridViewOutlinedIcon onClick={gridViewHandler} className={`${gridView ? cl.activeView : ''}`} />
          <DensitySmallOutlinedIcon onClick={rowViewHandler} className={`${rowView ? cl.activeView : ''}`} />
        </div>
      </div>
      <div className={cl.productList} style={viewsStyle}>
        {
          // ollProducts?.map(p => <CartProduct
          productsList?.map(p => <CartProduct
            key={p.id} imgUrl={p.imgUrl} productName={p.productName}
                                             productDeck={p.desc} productPrice={p.itemPrise} sales={p.sales}
                                             ads={'12'} affiliate={'someText'} reviews={p.reviews}
                                             imgUserUrl={p.imgUserUrl} userName={'userName'} userMail={'@someMail'}
                                             createdAk={'08.03.2020'} gridView={gridView} />)
        }
      </div>
    </div>
  );
};

export default FilteredProductsList;
