import React from 'react';
const ProductShow = ({ image, value, description, isLoading }) => {
  return (
    <div
      className={`single-products-catagory clearfix ${isLoading ? 'hide' : ''}`}
    >
      <a href="shop.html">
        <img src={image} alt="" />
        <div className="hover-content">
          <div className="line"></div>
          <p>{value}</p>
          <h4>{description}</h4>
        </div>
      </a>
    </div>
  );
};

export default ProductShow;
