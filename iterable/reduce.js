let products = [
    {
      productName: 'Laptop',
      sellerName: 'ElectroMart',
      price: 1200,
      discount: 10
    },
    {
      productName: 'Smartphone',
      sellerName: 'GizmoTech',
      price: 800,
      discount: 5
    },
    {
      productName: 'Headphones',
      sellerName: 'AudioExpress',
      price: 100,
      discount: 15
    },
    {
      productName: 'Camera',
      sellerName: 'SnapShot',
      price: 500,
      discount: 20
    },
    {
      productName: 'Tablet',
      sellerName: 'GadgetGuru',
      price: 600,
      discount: 8
    }
  ];

  let total_pay=products.filter((item)=> item.price > 700)
  .reduce((acc, item) => acc + item.price,0)
  console.log(total_pay);