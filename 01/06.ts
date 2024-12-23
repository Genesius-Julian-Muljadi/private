interface Product2 {
  name: string;
  price: number;
}

function cloneArray(arr: any[]): any[] {
  return arr.slice();
}

function sortProductsByPrice(products: Product2[]): void {
  products.sort((productA, productB) => {
    return productA.price - productB.price;
  });
}

function sortProducts(products: Product2[]): void {
  const clonedProducts: Product2[] = cloneArray(products);
  sortProductsByPrice(clonedProducts);

  console.log(clonedProducts);
}

sortProducts([
  { name: "Shirt", price: 300 },
  { name: "Jeans", price: 100 },
  { name: "Hat", price: 200 },
]);
