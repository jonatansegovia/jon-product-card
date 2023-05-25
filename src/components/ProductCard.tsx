import React, { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import {
  ProductsContextProps,
  Product,
  onChangeArgs,
  InitialValues,
  ProductCardHandlers,
} from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export interface Props {
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  initialValues: InitialValues;
  onChange?: (args: onChangeArgs) => void;
  product: Product;
  style?: React.CSSProperties;
  value?: number;
}

export const ProductContext = createContext({} as ProductsContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  className,
  children,
  initialValues,
  onChange,
  product,
  style,
  value,
}: Props) => {
  const {
    counter,
    increaseBy,
    isMaxCountReached,
    maxCount,
    reset,
  } = useProduct({
    initialValues,
    onChange,
    product,
    value,
  });

  return (
    <Provider value={{ product, counter, increaseBy, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children &&
          children({
            count: counter,
            isMaxCountReached,
            increaseBy,
            product,
            maxCount,
            reset,
          })}
      </div>
    </Provider>
  );
};
