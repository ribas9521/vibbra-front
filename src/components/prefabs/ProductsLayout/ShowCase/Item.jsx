import React from 'react';
import { Link } from 'react-router-dom';
import { toReais, getShortDescription } from '../../../../helpers';
const Item = ({ description, value, photo }) => {
  return (
    <div className="col-sm-6 col-md-4 product">
      <div className="body">
        <a href="#favorites" className="favorites" data-favorite="inactive">
          <i className="ion-ios-heart-outline"></i>
        </a>
        <Link to="/product">
          <img src={photo} alt="Xiamomi Mi Pad 2" />
        </Link>

        <div className="content align-center">
          <p className="price">{toReais(value)}</p>
          <h2 className="h3">{getShortDescription(description)}</h2>
          <hr className="offset-sm" />
          <Link to="/product" className="btn btn-link">
            <i className="ion-android-open"></i> Details
          </Link>
          <button className="btn btn-primary btn-sm rounded">
            {' '}
            <i className="ion-bag"></i> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
