# JON-product-card

Este es un paquete de pruebas de despliegue en NPM

### Jon

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'do-product-card';
```

```

<ProductCard
        initialValues={{ count: 0, maxCount: 10 }}
        product={product}
      >
        {({ isMaxCountReached, reset, increaseBy, count }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
</ProductCard>
```
