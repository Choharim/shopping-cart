import styled from 'styled-components';
import {CartItemType} from '../App';
import CartItem from '../CartItem/CartItem';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({cartItems,addToCart,removeFromCart}) => {

  return(
    <Wrapper>
      <h2>shopping cart</h2>
      {cartItems.length === 0 && <p>no item in cart</p>}
      {cartItems.map(item => <CartItem key={item.id} item={item}
      addToCart={addToCart} removeFromCart={removeFromCart}/>)}
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