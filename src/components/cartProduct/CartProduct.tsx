import React, { useState } from 'react';
import cl from './CartProduct.module.css';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import img from './img/p1.png';


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
  gridView: boolean
}
const CartProduct = (props: CartProductType) => {
  const [productDeck, setProductDeck] = useState(true);
  const [bagInfo, setBagInfo] = useState(false);
  const [userInfo, setUserInfo] = useState(false);
  const [cartInfo, setCartInfo] = useState(false);
  const [cartInfoText, setCartInfoText] = useState('Удалено из корзины');
  const [cartInfoStyle, setCartInfoStyle] = useState('none');
  const [starInfo, setStarInfo] = useState(false);
  const [starInfoText, setStarInfoText] = useState('Удалено из избранного');
  const [starInfoStyle, setStarInfoStyle] = useState('none');
  const bagInfoHandler = () => {
    setBagInfo(!bagInfo);
  };
  const userInfoHandler = () => {
    setUserInfo(!userInfo);
  };
  const starInfoHandler = () => {
    setStarInfoStyle('flex');
    let textDel = 'Удалено из избранного';
    let textAdd = 'Добавлено в избранное';
    setStarInfo(!starInfo);
    if (starInfoText === textDel) {
      setStarInfoText(textAdd);
    } else {
      setStarInfoText(textDel);
    }
    setTimeout(() => {
      setStarInfoStyle('none');
    }, 2000);
  };
  const cartInfoHandler = () => {
    setCartInfoStyle('flex');
    let textDel = 'Удалено из корзины';
    let textAdd = 'Добавлено в корзину';
    setCartInfo(!cartInfo);
    if (starInfoText === textDel) {
      setCartInfoText(textAdd);
    } else {
      setCartInfoText(textDel);
    }
    setTimeout(() => {
      setCartInfoStyle('none');
    }, 2000);
  };


  return (
    <div className={`${cl.cartProductWrap} ${props.gridView ? cl.cartPCol : cl.cartPRow}`}
         style={{ flexDirection: props.gridView ? 'column' : 'row' }}>
      <div className={cl.imgWrap}>
        <img src={img} alt="productName" />
        {/*<img src={props.imgUrl} alt='productName' />*/}
      </div>
      <div className={cl.infoWrap}>
        <h4>{props.productName}</h4>
        {productDeck && <p>{props.productDeck}</p>}
        {bagInfo && <div className={cl.bagInfo}>
          <p>Продажи:<span>{props.sales}</span></p>
          <p>Объявлений:<span>{props.sales}</span></p>
          <p>Партнерских:<span>{props.affiliate}</span></p>
          <p>Отзывы:<span>{props.reviews}</span></p>
        </div>}
        {userInfo && <div className={cl.userInfo}>
          <div className={cl.imgUserWrap}>
            <img src={props.imgUserUrl} alt="productName" />
          </div>
          <p>{props.userName}</p>
          <p>{props.userMail}</p>
          <p><span>Аккаунт создан:</span>{props.createdAk}</p>
        </div>}
        <div className={cl.cartInfo} style={{ display: cartInfoStyle }}>
          <p>{cartInfoText}</p>
        </div>
        <div className={cl.starInfo} style={{ display: starInfoStyle }}>
          <p>{starInfoText}</p>
        </div>
      </div>
      <div className={cl.infoExpansiveWrap}>
        <div className={cl.infoExpansiveIcons}>
          <BusinessCenterOutlinedIcon className={`${cl.iconBtn} ${bagInfo && cl.bagBtn}`} onClick={bagInfoHandler} />
          <StarBorderOutlinedIcon className={`${cl.iconBtn} ${starInfo && cl.starBtn}`} onClick={starInfoHandler} />
          <AccountCircleOutlinedIcon className={`${cl.iconBtn} ${userInfo && cl.userBtn}`} onClick={userInfoHandler} />
          <ShoppingCartOutlinedIcon className={`${cl.iconBtn} ${cartInfo && cl.cartBtn}`} onClick={cartInfoHandler} />
        </div>
        {props.gridView && <span className={`${cl.productPrice}`}>{props.productPrice}$</span>}
      </div>
      {!props.gridView && <div className={cl.infoPriceWrap}>
        <p>
          <span className={`${cl.infoName}`}>Страна:</span>
          <span className={`${cl.infoData}`}>Китай</span>
        </p>
        <p>
          <span className={`${cl.infoName}`}>Город:</span>
          <span className={`${cl.infoData}`}>Хайнань</span>
        </p>
        <p>
          <span className={`${cl.infoName}`}>Дата подачи:</span>
          <span className={`${cl.infoData}`}>08.03.2020</span>
        </p>
        <p>
          <span className={`${cl.productPriceText}`}>Цена:</span>
          <span className={`${cl.productPrice}`}>{props.productPrice}$</span>
        </p>
      </div>
      }
    </div>
  );
};

export default CartProduct;
