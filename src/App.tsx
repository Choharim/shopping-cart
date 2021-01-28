import {useState} from 'react';
import {useQuery} from 'react-query';
import {Wrapper} from './App.styles';
import Item from './Item/Item';

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
  const {data,isLoading,error} = useQuery<CartItemType[]>('products',getProducts);

 // console.log(data);
  const getTotalItems = () => null;
  const handleAddToCart = (clickedItem:CartItemType) => null;
  const handleRemoveFromCart = () => null;

  if(isLoading){
    return <h1>Loading...</h1>;
  }
  if(error){
    return <h1>error...</h1>;
  }
  return (
    <Wrapper>
      {data && data.map(item =>  <Item key={item.id} item={item} handleAddToCart={handleAddToCart}/>)}
    </Wrapper>
  );
};

export default App;
