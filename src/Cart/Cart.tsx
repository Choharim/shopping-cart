import styled from 'styled-components';
import {CartItemType} from '../App';
import CartItem from '../CartItem/CartItem';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({cartItems,addToCart,removeFromCart}) => {

  const calcTotal = (items:CartItemType[]) =>
  items.reduce((ack:number, item) => ack + item.amount * item.price, 0);

  return(
    <Wrapper>
      <h2>shopping cart</h2>
      {cartItems.length === 0 && <p>no item in cart</p>}
      {cartItems.map(item => <CartItem key={item.id} item={item}
      addToCart={addToCart} removeFromCart={removeFromCart}/>)}
      <h2>Total: ${calcTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;

const Wrapper =  styled.div`
display:flex;
flex-direction:column;
align-items:center;
background-color:white;
border-radius:10px;
`;