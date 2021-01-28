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
  <InfoWrap>
    <h3>{item.title}</h3>
    <Wrapper>
      <p>Price: ${item.price}</p>
      <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
    </Wrapper>
    <Wrapper>
      <button onClick={() => removeFromCart(item.id)}>-</button>
      <p>{item.amount}</p>
      <button onClick={() => addToCart(item)}>+</button>
    </Wrapper>
  </InfoWrap>
  <Img src={item.image} alt={item.title} />
</Wrapper>
);

export default CartItem;

const Wrapper = styled.div`
display:flex;
justify-content:space-between;
width:100%;
`;

const InfoWrap = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:50%;
margin-left:10px;
`;

const Img = styled.img`
max-height:120px;
object-fit:cover;
margin-right:10px;
`;