import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delFromCart, setSelectedCart } from '../../store/actions';
import { getSelectedCart } from '../../store/selectors';
//import { IObjectForCart } from '../../../react-app-env';



const Card =(
  id,
  idshop,
  name,
  price,
  discount,
  imageurl,
) => { 
  
  const [isPresedButton, setIsPresedButton] = useState(false);
  const dispatch = useDispatch();
  const currentFlowersInCart = useSelector(getSelectedCart);
  const currentFlower = {
    id,
    idshop,
    name,
    price,
    discount,
    imageurl,
  }

  const addToCart = () => {
    const objToDispatch = {...currentFlower, quantity: 1 }
    dispatch(setSelectedCart(objToDispatch));
  }

  const deleteFromCart = (flower) => {
    dispatch(delFromCart(flower));
  }

  const isExist = (id) => {
    const isExistsFlower = currentFlowersInCart.find(item => item.id === id);
    if (isExistsFlower) {
      setIsPresedButton(true);
    } else {
      setIsPresedButton(false);
    }
  }

  useEffect(() => {
    isExist(id);
  }, [isPresedButton]);

  return (
    <div className="mx-auto mt-4 max-w-[300px] lg:max-w-[600px] rounded-3xl ring-1 ring-gray-200">
      <div className="mt-2 p-2 w-full flex-shrink-0">
        <div className="w-[200px] h-[200px] mb-2 lg:w-[400px] lg:h-[400px]">
          <img className="w-full h-full rounded-3xl object-cover" src={imageurl} alt={name} />
        </div>
        <div className="rounded-2xl bg-gray-50 py-4 text-center ring-1 ring-inset ring-gray-900/5">
          <div className="mx-auto max-w-xs px-4">
            <p className="text-base font-semibold text-gray-600">{name}</p>
            <p className="mt-4 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">${price}</span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
            </p>
            <button className={`mt-4 cursor-pointer block w-full rounded-md ${isPresedButton ? 'bg-red-600' : 'bg-indigo-600'} px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              onClick={() => {
                const isAlreadyExist = currentFlowersInCart.find(item => item.id === id); 
                if (isAlreadyExist) {
                  deleteFromCart(isAlreadyExist);
                } else {
                  addToCart();
                }
                setIsPresedButton(!isPresedButton);
              }}
            >
              {isPresedButton ? "Product was added" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card;