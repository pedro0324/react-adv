import { createContext, ReactElement, useContext } from "react";

import styles from "../styles/styles.module.css";

import { useProduct } from '../hooks/useProduct';

import { ProductCardProps, ProductContextProps } from "../interfaces/interfaces";
import { ProductTitle } from "./ProductTitle";
import { ProductImage } from "./ProductImage";
import { ProductButtons } from "./ProductButtons";



export const ProductContext=createContext({} as ProductContextProps);
const { Provider }= ProductContext;


export const ProductCard = ({ product, children }: ProductCardProps) => {

    const { counter, increaseBy }=useProduct();

  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}>
    <div className={styles.productCard}>
      
      { children }
      {/* <ProductImage />

      <ProductTitle title={ product.title } />

      <ProductButtons counter={ counter} increaseBy={ increaseBy } /> */}

    </div>
    </Provider>
      
  );
};


// ProductCard.Title   = ProductTitle;
// ProductCard.Image   = ProductImage;
// ProductCard.Buttons = ProductButtons;

