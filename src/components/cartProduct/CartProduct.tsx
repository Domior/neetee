import React from 'react';
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
}
const CartProduct = (props: CartProductType) => {
  return (
    <div className={cl.cartProductWrap}>
      <div className={cl.imgWrap}>
        <img src={props.imgUrl} alt='productName' />
      </div>
      <div className={cl.infoWrap}>
        <h4>{props.productName}</h4>
        <p>{props.productDeck}</p>
        <div className={cl.bagInfo}>
         <p>Продажи:{props.sales}</p>
         <p>Объявлений:{props.sales}</p>
         <p>Партнерских:{props.affiliate}</p>
         <p>Отзывы:{props.reviews}</p>
        </div>
        <div className={cl.userInfo}>
          <div className={cl.imgUserWrap}>
            <img src={props.imgUserUrl} alt='productName' />
          </div>
          <p>{props.userName}</p>
          <p>{props.userMail}</p>
          <p><span>Аккаунт создан:</span>{props.createdAk}</p>
        </div>
        <div className={cl.cartInfo}>
          <p>Добавлено в корзину</p>
          <p>Удалено из корзины</p>
        </div>
        <div className={cl.starInfo}>
          <p>Добавлено в избранное</p>
          <p>Удалено из избранного</p>
        </div>
      </div>
      <div className={cl.infoExpansiveWrap}>
        <BusinessCenterOutlinedIcon className={`${cl.iconBtn} ${cl.bagBtn}`}/>
        <StarBorderOutlinedIcon className={`${cl.iconBtn} ${cl.starBtn}`}/>
        <AccountCircleOutlinedIcon className={`${cl.iconBtn} ${cl.userBtn}`}/>
        <ShoppingCartOutlinedIcon className={`${cl.iconBtn} ${cl.cartBtn}`}/>
      </div>
    </div>
  );
};

export default CartProduct;
