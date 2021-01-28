import styled from 'styled-components';
import {CartItemType} from '../App';
import Item from '../Item/Item';

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id:number) => void; 
}

const CartItem: React.FC<Props> = ({item, addToCart,removeFromCart}) => (
<Wrapper>
  <div>
    <h3>{item.title}</h3>
    <div>
      <p>Price: ${item.price}</p>
      <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
    </div>
    <div>
      <button onClick={() => removeFromCart(item.id)}>-</button>
      <p>{item.amount}</p>
      <button onClick={() => addToCart(item)}>+</button>
    </div>
  </div>
  <img src={item.image} alt={item.title} />
</Wrapper>
);

export default CartItem;

const Wrapper = styled.div`
`;