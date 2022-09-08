import { createContext, CSSProperties, ReactElement } from "react";

import styles from "../styles/styles.module.css";

import { useProduct } from '../hooks/useProduct';

import { Product, ProductContextProps } from "../interfaces/interfaces";


export const ProductContext=createContext({} as ProductContextProps);
const { Provider }= ProductContext;


export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[]; // uno o muchos elementos
  classname?: string;
  style?: CSSProperties
}


export const ProductCard = ({ product, children, classname, style }: ProductCardProps) => {

    const { counter, increaseBy }=useProduct();

  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}>
    <div className={`${styles.productCard} ${classname}`} style={style}>
      
      { children }
      
    </div>
    </Provider>
      
  );
};


// ProductCard.Title   = ProductTitle;
// ProductCard.Image   = ProductImage;
// ProductCard.Buttons = ProductButtons;

