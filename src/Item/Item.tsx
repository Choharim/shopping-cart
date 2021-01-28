import {CartItemType} from '../App';
import styled from 'styled-components';

type Props = {
  item: CartItemType;
  handleAddToCart:(ClickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <Img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description.slice(0,100)}...</p>
    </div>
    <h3>${item.price}</h3>
    <Btn onClick={() => handleAddToCart(item)}>Add to cart</Btn>
  </Wrapper>
);
export default Item;



const Wrapper  = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
width:44%;
height: 570px;
margin-bottom:15px;
padding:20px;
border-radius:10px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

@media only screen and (max-width: 710px) {
    width:80%;
    height:500px;
  }
`;

const Img = styled.img`
max-height:250px;
object-fit:cover;
`;

const Btn = styled.button`
width:180px;
padding:15px 0;
outline:none;
border:none;
border-radius:20px;
background-color:powderblue;
cursor: pointer;
`;