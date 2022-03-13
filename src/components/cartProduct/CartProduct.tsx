import React, { useState } from 'react';
import cl from './CartProduct.module.css';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


type CartProductType = {
  imgUrl: string
  productName: string
  productDeck: string
  productPrice: string
  sales: string
  ads: string
  affiliate: string
  reviews: string
  imgUserUrl: string
  userName: string
  userMail: string
  createdAk: string
  gridView:boolean
}
const CartProduct = (props: CartProductType) => {
  const[productDeck,setProductDeck]=useState(true)
  const[bagInfo,setBagInfo]=useState(false)
  const[userInfo,setUserInfo]=useState(false)
  const[cartInfo,setCartInfo]=useState(false)
  const[starInfo,setStarInfo]=useState(false)
  const bagInfoHandler = () => {
    setBagInfo(!bagInfo)
  }
  const userInfoHandler = () => {
    setUserInfo(!userInfo)
  }
  const starInfoHandler = () => {
    setStarInfo(!starInfo)
  }
  const cartInfoHandler = () => {
    setCartInfo(!cartInfo)
  }


  return (
    <div className={`${cl.cartProductWrap} ${props.gridView? cl.cartPCol : cl.cartPRow}`}
         style={{flexDirection: props.gridView? 'column': 'row'}}>
      <div className={cl.imgWrap}>
        <img src={props.imgUrl} alt='productName' />
      </div>
      <div className={cl.infoWrap}>
        <h4>{props.productName}</h4>
        {productDeck &&  <p>{props.productDeck}</p>}
        {bagInfo && <div className={cl.bagInfo}>
         <p>Продажи:{props.sales}</p>
         <p>Объявлений:{props.sales}</p>
         <p>Партнерских:{props.affiliate}</p>
         <p>Отзывы:{props.reviews}</p>
        </div>}
        {userInfo && <div className={cl.userInfo}>
          <div className={cl.imgUserWrap}>
            <img src={props.imgUserUrl} alt='productName' />
          </div>
          <p>{props.userName}</p>
          <p>{props.userMail}</p>
          <p><span>Аккаунт создан:</span>{props.createdAk}</p>
        </div>}
        {cartInfo && <div className={cl.cartInfo}>
          <p>Добавлено в корзину</p>
          {/*<p>Удалено из корзины</p>*/}
        </div>}
        {starInfo && <div className={cl.starInfo}>
          <p>Добавлено в избранное</p>
          {/*<p>Удалено из избранного</p>*/}
        </div>}
      </div>
      <div className={cl.infoExpansiveWrap}>
        <BusinessCenterOutlinedIcon className={`${cl.iconBtn} ${bagInfo && cl.bagBtn}`} onClick={bagInfoHandler}/>
        <StarBorderOutlinedIcon className={`${cl.iconBtn} ${starInfo && cl.starBtn}`} onClick={starInfoHandler}/>
        <AccountCircleOutlinedIcon className={`${cl.iconBtn} ${userInfo && cl.userBtn}`} onClick={userInfoHandler}/>
        <ShoppingCartOutlinedIcon className={`${cl.iconBtn} ${cartInfo && cl.cartBtn}`} onClick={cartInfoHandler}/>
      </div>
    </div>
  );
};

export default CartProduct;
