export type itemUserAdresType={
  id:string
  imgUrl?:string
  phone:string
  firstName:string
  lastName?:string
  email:string
  adres:string
  index:string
  country:string
  town:string
  companyName?:string
  inn?:string
}
export type selectedProductDefaultType={
  id:string
  imgUrl:string
  desc:string
  color:string
  storeName:string
  itemPrise:string
  count:string
  deliveryPr:string
  totalPr:string
  sales:string
  reviews:string
  imgUserUrl:string
  productName:string
}
const userAdres = [
  {
    id: '1',
    // imgUrl: './../someLink',
    phone: '+ 380986473192',
    firstName: 'Андрей',
    lastName: 'Подольський',
    email: 'neetee_user@mail.com',
    adres: 'Россия, Московская область, Москва, Проспект Мира, 34',
    index:'101010',
    country:'Россия',
    town:'Москва',
    companyName:'Просто швабры',
    inn:'323344546231',
  },
  {
    id: '2',
    // imgUrl: './../someLink',
    phone: '+ 3809800000',
    firstName: 'Андрей',
    lastName: 'Подольський',
    email: 'neetee_user@mail.com',
    adres: 'Ukrain, Московская область, Москва, Проспект Мира, 34',
    index:'101010',
    country:'Россия',
    town:'Москва',
    companyName:'Просто швабры',
    inn:'323344546231',
  },
  {
    id: '3',
    imgUrl: './../someLink',
    phone: '+ 3809812345',
    firstName: 'Андрей',
    lastName: 'Подольський',
    email: 'neetee_user@mail.com',
    adres: 'Ukrain, Московская область, Москва, Проспект Мира, 34',
    index:'101010',
    country:'Россия',
    town:'Москва',
    companyName:'Просто швабры',
    inn:'323344546231',
  },
];
const listSelectedProductDefault = [
  {
    id:'io1',
    imgUrl:'./../../../../../assets/productImg.jpg',
    desc:'2021 новый предмет baotou тапочки женские летние за  тапочки...',
    color:'Голубое озеро 60 мм',
    storeName:'揭阳市生生模具器有限公司',
    itemPrise:'350 ',
    count:'100',
    deliveryPr:'5 $',
    totalPr:'35 000 $',
    sales:'20',
    reviews:'7',
    imgUserUrl:'./../../../../../assets/avatar.png',
    productName:'productName'
  },
  {
    id:'io2',
    imgUrl:'./../assets/someName.png',
    desc:'2021 новый предмет baotou тапочки женские летние за  тапочки...',
    color:'Голубое озеро 60 мм',
    storeName:'揭阳市生生模具器有限公司',
    itemPrise:'50 ',
    count:'100',
    deliveryPr:'5 $',
    totalPr:'35 000 $',
    sales:'20',
    reviews:'88',
    imgUserUrl:'./../../../../../assets/avatar.png',
    productName:'productName'
  },
  {
    id:'io3',
    imgUrl:'./../assets/someName.png',
    desc:'2021 новый предмет baotou тапочки женские летние за  тапочки...',
    color:'Голубое озеро 60 мм',
    storeName:'揭阳市生生模具器有限公司',
    itemPrise:'35 ',
    count:'100',
    deliveryPr:'5 $',
    totalPr:'35 000 $',
    sales:'12',
    reviews:'88',
    imgUserUrl:'./../../../../../assets/avatar.png',
    productName:'productName'
  },
  {
    id:'io4',
    imgUrl:'./../assets/someName.png',
    desc:'2021 новый предмет baotou тапочки женские летние за  тапочки...',
    color:'Голубое озеро 60 мм',
    storeName:'揭阳市生生模具器有限公司',
    itemPrise:'355',
    count:'100',
    deliveryPr:'5 $',
    totalPr:'35 000 $',
    sales:'12',
    reviews:'22',
    imgUserUrl:'./../../../../../assets/avatar.png',
    productName:'productName'
  },
  {
    id:'io5',
    imgUrl:'./../assets/someName.png',
    desc:'2021 новый предмет baotou тапочки женские летние за  тапочки...',
    color:'Голубое озеро 60 мм',
    storeName:'揭阳市生生模具器有限公司',
    itemPrise:'355',
    count:'100',
    deliveryPr:'5 $',
    totalPr:'35 000 $',
    sales:'12',
    reviews:'22',
    imgUserUrl:'./../../../../../assets/avatar.png',
    productName:'productName'
  },
  {
    id:'io6',
    imgUrl:'./../assets/someName.png',
    desc:'2021 новый предмет baotou тапочки женские летние за  тапочки...',
    color:'Голубое озеро 60 мм',
    storeName:'揭阳市生生模具器有限公司',
    itemPrise:'3508',
    count:'100',
    deliveryPr:'5 $',
    totalPr:'35 000 $',
    sales:'90',
    reviews:'13',
    imgUserUrl:'./../../../../../assets/avatar.png',
    productName:'productName'
  },
  {
    id:'io7',
    imgUrl:'./../assets/someName.png',
    desc:'2021 новый предмет baotou тапочки женские летние за  тапочки...',
    color:'Голубое озеро 60 мм',
    storeName:'揭阳市生生模具器有限公司',
    itemPrise:'3508',
    count:'100',
    deliveryPr:'5 $',
    totalPr:'35 000 $',
    sales:'90',
    reviews:'13',
    imgUserUrl:'./../../../../../assets/avatar.png',
    productName:'productName'
  }
]
const initialState = {
  listUserAdres: userAdres,
  currentAdres: {}as itemUserAdresType,
  listSelectedProduct:listSelectedProductDefault,
};

export const orderReducer = (state: any = initialState, action: actionType) => {
  switch (action.type) {
    case 'ORDER/SET-CURRENT-ADRES': {
      console.log('currentAdres', state.currentAdres );
      console.log('currentAdres', state.listUserAdres[0] );
      console.log('currentAdres', action.payload );
      return { ...state, currentAdres: action.payload };
    }
    case 'ORDER/SET-NEW-ADRES':
      console.log(action.payload);
      return { ...state, listUserAdres: [action.payload,...state.listUserAdres] };
    case 'ORDER/CHANGE-ADRES': {
      return { ...state, listUserAdres:[state.listUserAdres.map((itemAdr:itemUserAdresType)=>{
       return  itemAdr.id !== action.payload.id? itemAdr : action.payload
        })] };
    }
    default:
      return state;
  }
};
// actions
type actionType = setCurrentAdresACType|setNewAdresACType|changeAdresACType
type setCurrentAdresACType = ReturnType<typeof setCurrentAdresAC>
type setNewAdresACType = ReturnType<typeof setNewAdresAC>
type changeAdresACType = ReturnType<typeof changeAdresAC>
export const setCurrentAdresAC = (payload:itemUserAdresType) => ({ type: 'ORDER/SET-CURRENT-ADRES', payload } as const);
export const changeAdresAC = (payload:itemUserAdresType) => ({ type: 'ORDER/CHANGE-ADRES', payload } as const);
export const setNewAdresAC = (payload:itemUserAdresType) => ({ type: 'ORDER/SET-NEW-ADRES', payload } as const);



// thunks




