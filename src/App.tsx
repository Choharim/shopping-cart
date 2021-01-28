import {useState} from 'react';
import {useQuery} from 'react-query';
import Item from './Item/Item';
import Cart from './Cart/Cart';
import styled,{css} from 'styled-components';
import {MdAddShoppingCart} from 'react-icons/md';

export type CartItemType  = {
  id: number;
  category:string;
  description:string;
  image:string;
  price:number;
  title:string;
  amount:number;
}

const getProducts = async (): Promise<CartItemType[]> => await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState([] as CartItemType[]);
  const {data,isLoading,error} = useQuery<CartItemType[]>('products',getProducts);

 // console.log(data);
  const getTotalItems = (items: CartItemType[]) => items.reduce(
    (ack: number, item) => ack + item.amount, 0);
    
  const handleAddToCart = (clickedItem:CartItemType) => {
    setCartItem(pre => {
      const isItemInCart = pre.find(item => item.id === clickedItem.id);
      
      if(isItemInCart){
        return pre.map(item => 
          item.id === clickedItem.id 
          ? {...item, amount: item.amount + 1}
          : item
          );
      }
      return [...pre,{...clickedItem, amount: 1}];
    });
  };

  const handleRemoveFromCart = () => null;

  if(isLoading){
    return <h1>Loading...</h1>;
  }
  if(error){
    return <h1>error...</h1>;
  }
  return (
    <Wrapper>
      <CartIcon onClick={() => setCartOpen(true)}/>
      <BgModal visible={cartOpen} onClick={() => setCartOpen(false)}>
        <ModalContainer bottom="30%" visible={cartOpen}>
        <Cart cartItems={cartItem} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />
        </ModalContainer>
      </BgModal>
      {data && data.map(item =>  <Item key={item.id} item={item} handleAddToCart={handleAddToCart}/>)}
    </Wrapper>
  );
};

export default App;

type bgModalProps = {
  visible: boolean;
};

type modalContainerProps = {
  bottom: string;
  visible: boolean;
};

 const Wrapper = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;
margin-top:40px;

@media only screen and (max-width: 710px) {
    flex-direction:column;
    align-items:center;
  }
`;

 const CartIcon =  styled(MdAddShoppingCart)`
position:fixed;
top:5px;
right:5px;
font-size:2rem;
cursor: pointer;
`;

 const BgModal = styled.div<bgModalProps>`
 display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 90;
  opacity:0;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.2s ease;
  ${(props) =>
    props.visible &&
    css`
      opacity: 1;
      visibility: visible;
    `};
`;

 const ModalContainer = styled.div<modalContainerProps>`
display: flex;
justify-content: center;
align-items:center;
max-width: 600px;
width: 100%;
z-index: 100;
opacity:0;
  visibility: hidden;
transition: 0.2s ease;
> div {
  transition: 0.2s ease;
}
> div {
      position: absolute;
      bottom: ${(props) => props.bottom};
    }
    ${(props) =>
    props.visible &&
    css`
      opacity: 1;
      visibility: visible;
    `};
`;
