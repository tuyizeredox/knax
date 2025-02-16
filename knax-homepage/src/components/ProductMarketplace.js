     // src/components/ProductMarketplace.js
     import React from 'react';
     import './ProductMarketplace.css'; // Create a separate CSS file for styles

     const ProductMarketplace = () => {
         const products = [/* Array of product objects */];

         return (
             <div className="product-grid">
                 {products.map(product => (
                     <div className="product-card" key={product.id}>
                         <img src={product.image} alt={product.name} />
                         <h3>{product.name}</h3>
                         <p>${product.price}</p>
                         <button className="add-to-cart">Add to Cart</button>
                     </div>
                 ))}
             </div>
         );
     };

     export default ProductMarketplace;