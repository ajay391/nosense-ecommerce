
import ProductCard from './ProductCard';

const ProductList = ({data}) => {
 

  return (
    <>
      {data.map(item => (
        <ProductCard key={item._id} item={item} />
      ))}

    </>
    
  );
};

export default ProductList;


// import React from 'react'

// import ProductCard from './ProductCard'


// const ProductList = ({data}) => {

//   return (
//     <>
//     {
//       data.map(item=>(
//         <ProductCard item={item} />
//       ))
//     }
      
//     </>
//   )
// }

// export default ProductList


// --------------------------------
