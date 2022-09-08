import { ProductCardProps } from '../components/ProductCard';
import { PropsButtons } from '../components/ProductButtons';
import { PropsImage } from '../components/ProductImage';
import { PropsTitle } from '../components/ProductTitle';


export interface Product {
    id: string;
    title: string,
    img?: string
}

export interface ProductContextProps{
    counter : number;
    increaseBy : (value: number)=>void;
    product: Product
}

export interface ProductCardHocProps {
    ({ product, children }: ProductCardProps): JSX.Element,
    Title: ( Props: PropsTitle) => JSX.Element;
    Image: ( Props: PropsImage) => JSX.Element;
    Buttons: ( Props: PropsButtons) => JSX.Element;
}
