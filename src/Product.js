import React from 'react';
import styled from 'styled-components';
import { useStateVaule } from './StateProvider';

const Product = ({ id, title, img, price, rating }) => {
  const [{ basket }, dispatch] = useStateVaule();
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        img,
        price,
        rating,
      },
    });
  };
  return (
    <Products>
      <div className="produnct__info">
        <p>{title}</p>
        <p className="produnct__pirce">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(parseInt(rating))
            .fill()
            .map(() => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img src={img} alt="" />
      <button onClick={addToBasket}>add to basket</button>
    </Products>
  );
};

export default Product;

const Products = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: #fff;
  margin: 10px;
  padding: 20px;
  max-height: 400px;
  min-width: 100px;
  flex: 1;
  z-index: 1;
  .produnct__info {
    height: 100px;
    margin-bottom: 15px;
    .produnct__pirce {
      margin-top: 5px;
    }
    .product__rating {
      display: flex;
    }
  }
  img {
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
    z-index: -2;
  }
  & button {
    background-color: #f0c14b;
    border: 1px solid;
    border-color: #a88734 #9c7e31 #846a29;
  }
`;
