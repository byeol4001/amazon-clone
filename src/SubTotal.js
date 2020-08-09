import React from 'react';
import styled from 'styled-components';
import CurrencyFormat from 'react-currency-format';
import { useStateVaule } from './StateProvider';
import { getBasketTotal } from './reducer';

const SubTotal = () => {
  const [{ basket }, dispatch] = useStateVaule();

  return (
    <SubTotals>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Sub Total ({basket.length} items) : <strong>{`${value}`}</strong>
            </p>
            <small className="subtital__gift">
              <input type="checkbox" />
              This other contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        prefix={'$'}
      />
      <button>Proceed to Checkout</button>
    </SubTotals>
  );
};

export default SubTotal;

const SubTotals = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  margin-left: 20px;
  padding: 20px;
  background-color: #f3f3f3;
  border: 1px solid #ddd;
  border-radius: 3px;
  .subtital__gift {
    display: flex;
    align-items: center;
  }
  .subtital__gift > input {
    margin-right: 5px;
  }
  button {
    width: 100%;
    height: 30px;
    margin-top: 10px;
    padding: 5px;
    background-color: #f0c14b;
    border: 1px solid;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
  }
`;
