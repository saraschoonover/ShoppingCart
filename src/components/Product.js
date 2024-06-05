import React from "react";

function Product({ product }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)</p>
    </div>
  );
}

export default Product;
