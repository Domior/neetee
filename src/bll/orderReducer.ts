const userAdres = [
  {
    id: '1',
    imgUrl: './../someLink',
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
    imgUrl: './../someLink',
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
    itemPrise:'350 $',
    count:'100',
    deliveryPr:'5 $',
    totalPr:'35 000 $'
  },
  {
    id:'io2',
    imgUrl:'./../assets/someName.png',
    desc:'2021 новый предмет baotou тапочки женские летние за  тапочки...',
    color:'Голубое озеро 60 мм',
    storeName:'揭阳市生生模具器有限公司',
    itemPrise:'350 $',
    count:'100',
    deliveryPr:'5 $',
    totalPr:'35 000 $'
  },
  {
    id:'io3',
    imgUrl:'./../assets/someName.png',
    desc:'2021 новый предмет baotou тапочки женские летние за  тапочки...',
    color:'Голубое озеро 60 мм',
    storeName:'揭阳市生生模具器有限公司',
    itemPrise:'350 $',
    count:'100',
    deliveryPr:'5 $',
    totalPr:'35 000 $'
  },
  {
    id:'io4',
    imgUrl:'./../assets/someName.png',
    desc:'2021 новый предмет baotou тапочки женские летние за  тапочки...',
    color:'Голубое озеро 60 мм',
    storeName:'揭阳市生生模具器有限公司',
    itemPrise:'350 $',
    count:'100',
    deliveryPr:'5 $',
    totalPr:'35 000 $'
  },
  {
    id:'io5',
    imgUrl:'./../assets/someName.png',
    desc:'2021 новый предмет baotou тапочки женские летние за  тапочки...',
    color:'Голубое озеро 60 мм',
    storeName:'揭阳市生生模具器有限公司',
    itemPrise:'350 $',
    count:'100',
    deliveryPr:'5 $',
    totalPr:'35 000 $'
  },
  {
    id:'io6',
    imgUrl:'./../assets/someName.png',
    desc:'2021 новый предмет baotou тапочки женские летние за  тапочки...',
    color:'Голубое озеро 60 мм',
    storeName:'揭阳市生生模具器有限公司',
    itemPrise:'350 $',
    count:'100',
    deliveryPr:'5 $',
    totalPr:'35 000 $'
  },
  {
    id:'io7',
    imgUrl:'./../assets/someName.png',
    desc:'2021 новый предмет baotou тапочки женские летние за  тапочки...',
    color:'Голубое озеро 60 мм',
    storeName:'揭阳市生生模具器有限公司',
    itemPrise:'350 $',
    count:'100',
    deliveryPr:'5 $',
    totalPr:'35 000 $'
  }
]
const initialState = {
  listUserAdres: userAdres,
  currentAdres: {},
  listSelectedProduct:listSelectedProductDefault,
};

export const orderReducer = (state: any = initialState, action: actionType) => {
  switch (action.type) {
    case 'ORDER/SET-CURRENT-ADRES': {
      return { ...state, currentAdres: action.payload };
    }
    case 'ORDER/SET-NEW-ADRES':
      console.log(action.payload);
      return { ...state, listUserAdres: [...state.listUserAdres, action.payload] };
    // case 'ORDER/CHANGE-ADRES':
    //     return {...state, listUserAdres: }
    default:
      return state;
  }
};
// actions
type actionType = setCurrentAdresACType|setNewAdresACType
type setCurrentAdresACType = ReturnType<typeof setCurrentAdresAC>
type setNewAdresACType = ReturnType<typeof setNewAdresAC>
export const setCurrentAdresAC = (payload:any) => ({ type: 'ORDER/SET-CURRENT-ADRES', payload } as const);
// export const changeUserAdresAC = (payload) => {type: 'ORDER/CHANGE-ADRES', payload}
export const setNewAdresAC = (payload:any) => ({ type: 'ORDER/SET-NEW-ADRES', payload } as const);
// export const setNewAdresAC = (payload) =>({type: 'setNewAdresAC', payload}as const)
// thunks




