import { ProductCard, ProductImage, ProductButtons, ProductTitle } from 'garv-product-card'

export const product = {
  id: '1',
  title: 'Coffee mug 1 - Card',
  // img: coffeeImg
}

function App() {
  return (
    <ProductCard
      key={product.id}
      product={product}
      initialValues={{
        count: 4,
        maxCount: 10
      }}
    >
      {
        ({ reset, isMaxCountReached, count, maxCount, increaseBy }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
            {count}
          </>
        )
      }

    </ProductCard>
  )
}

export default App
