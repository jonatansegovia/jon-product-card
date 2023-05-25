import { useState, useEffect, useRef } from 'react';
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';

export interface useProductArgs {
  initialValues?: InitialValues;
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({
  initialValues,
  onChange,
  product,
  value = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const isMounted = useRef(false);
  const maxCount = initialValues?.maxCount;
  // const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    // if (isControlled.current) return onChange!({ count: value, product });

    let newValue = Math.max(counter + value, 0);
    // if (maxCount) newValue = Math.min(newValue, maxCount);
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    increaseBy,
    onChange,
    isMaxCountReached: maxCount! <= counter,
    maxCount,
    reset,
  };
};
