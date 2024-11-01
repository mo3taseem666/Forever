import { useEffect, useState } from 'react';
import Title from '../../Golbal Components/Title';
import { useMyProvider } from '../../../Context/SharedStateContext';
import CartPart from './components/CartPart';

interface Props {}

const Cart: React.FC<Props> = ({}) => {
   const { cart } = useMyProvider();   

   return (
      <div className="pt-5 mt-5 flex flex-col border-t">
         <Title first="YOUR" second="CART" textSize={false} justify={false} />
         <CartPart />
      </div>
   );
};

export default Cart;
