import React from 'react';
import styled from 'styled-components';
import { useStateVaule } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';

const Checkout = () => {
  const [{ basket }] = useStateVaule();
  return (
    <Checkouts>
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492688_.jpg"
          alt="banner"
          className="checkout__ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shipping Baket is EMPTY</h2>
            <p>
              Empty 😇 GOOD
              <br />
              SAVE YOUR MONEY
            </p>
          </div>
        ) : (
          <div>
            <h2>Your Shipping Baket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                img={item.img}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <SubTotal />
        </div>
      )}
    </Checkouts>
  );
};

export default Checkout;

const Checkouts = styled.div`
  display: flex;
  padding: 20px;
  background-color: #fff;
  height: max-content;
  & div > h2 {
    margin: 0 10px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  .checkout__ad {
    width: 100%;
    margin-bottom: 15px;
  }
`;
