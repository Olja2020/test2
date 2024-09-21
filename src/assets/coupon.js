//import { ICoupon } from '../../react-app-env';
import { v4 as uuidv4 } from 'uuid';

 const currentCoupon = [
  {
    id: '1',
    name: 'Daughter',
    discount: 0.5,
    code: uuidv4(),
    stateUsing: 'unused',
    imgUrl: '../../public/images/coupons/ord_1.png',
  },
  {
    id: '2',
    name: 'Boyfriend',
    discount: 0.4,
    code: uuidv4(),
    stateUsing: 'unused',
    imgUrl: '../../public/images/coupons/ord_2.png',
  },
  {
    id: '3',
    name: 'Muther',
    discount: 0.3,
    code: uuidv4(),
    stateUsing: 'unused',
    imgUrl: 'public/images/coupons/ord_3.png',
  }
]

export default currentCoupon;