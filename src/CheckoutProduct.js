import React from 'react';
import styled from 'styled-components';
import { useStateVaule } from './StateProvider';

const CheckoutProduct = ({ id, price, img, title, rating }) => {
  const [{ basket }, dispatch] = useStateVaule();
  const onRemove = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };
  return (
    <CheckoutProducts>
      <img src={img} className="checkoutProduct__img" alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(parseInt(rating))
            .fill()
            .map(() => (
              <p>⭐️</p>
            ))}
        </div>
        <button onClick={onRemove}>Remove to basket</button>
      </div>
    </CheckoutProducts>
  );
};

export default CheckoutProduct;

const CheckoutProducts = styled.div`
  display: flex;
  margin: 20px 0;
  .checkoutProduct__img {
    object-fit: contain;
    width: 180px;
    height: 180px;
  }
  .checkoutProduct__info {
    padding-left: 20px;
  }
  .checkoutProduct__title {
    font-size: 17px;
    font-weight: 800;
  }
  .checkoutProduct__rating {
    display: flex;
  }
  & button {
    background-color: #f0c14b;
    border: 1px solid;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    margin-top: 10px;
  }
`;
