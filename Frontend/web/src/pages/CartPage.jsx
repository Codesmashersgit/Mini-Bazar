
import React from "react";
import Navbar from "../components/Navbar"
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart } from '../../redux/CreateSlice'
// import { incrementQuantity } from '../../redux/CreateSlice'
// import { decrementQuantity} from '../../redux/CreateSlice'

const Cart = ({ dark, toggle, showdisplay, showbag }) => {
//    const dispatch = useDispatch();
//   const items = useSelector((state) => state.cart.list);  

//   const handleRemove = (id) => {
//     dispatch(removeFromCart(id));
//   };
//   const handleIncre=(item)=>{
//     dispatch(incrementQuantity(item.id))

//   }
// const handledecre=(item)=>{
//   dispatch(decrementQuantity(item.id))



    return (
      <>
        <Navbar dark={dark} toggle={toggle} showdisplay={!showdisplay} showbag={!showbag} />
        <div
          className={`h-screen w-screen flex flex-col gap-3 justify-center items-center pt-7 ${
            dark ? "bg-black text-white" : "bg-white text-black"
          } transition-all duration-1000 ease-in-out`}
        >
          <img
            src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"
            className="h-[150px]"
            alt="Empty Cart"
          />
          <p className="font-[sk] text-center">Hey, it feels so light!</p>
          <p className="font-light text-center">
            There is nothing in your bag. Let's add some items.
          </p>
        
      
     
      </div>
    </>
  );
};

export default Cart;
