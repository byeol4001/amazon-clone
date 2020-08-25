import React, { useState, Fragment } from 'react';
import styled from 'styled-components';

const Test = () => {
  const [buyLottos, setBuyLottos] = useState();
  const [lottoNumber, setLottoNumber] = useState([]);
  const [lucky, setLucky] = useState();
  const [check, setCheck] = useState([]);

  const chageBuyLottos = (e) => {
    setBuyLottos(e.target.value);
  };

  const countLottos = () => {
    let result = buyLottos / 1000;
    setBuyLottos('');
    alert(`감사합니다. ${result}장 구매 되었습니다`);
    lottos(result);
    setLuckyNumber();
  };

  let lottos = (num) => {
    for (let i = 1; i <= num + 1; i++) {
      let i = Array(6)
        .fill()
        .map(() => parseInt(Math.random() * 45 + 1))
        .sort((a, b) => a - b);
      setLottoNumber([...lottoNumber, lottoNumber.push(i)]);
    }
  };

  let count = () => {
    for (let i in lottoNumber) {
      let counts = lucky[0].concat(lottoNumber[i]);
      const result = counts.reduce((x, y) => {
        x[y] = ++x[y] || 1;
        return x;
      }, {});
      for (let i in result) {
        if (result[i] > 1) {
          setCheck({ ...check, i: i });
        }
      }
    }
  };

  let setLuckyNumber = () => {
    let num = Array(6)
      .fill()
      .map(() => parseInt(Math.random() * 45 + 1))
      .sort((a, b) => a - b);
    setLucky([num]);
  };

  console.log('check', check);

  return (
    <Container>
      <h2>로또 1장에 1000원 판매합니다</h2>
      <Inputs>
        <input
          type="textbox"
          value={buyLottos}
          onChange={chageBuyLottos}
          placeholder="원하는 금액을 입력해 주세용 😇"
        />
        <button onClick={countLottos}>submit</button>
        {lucky && (
          <p className="luckyNum">
            {lucky.join(', ')} <br />
            {lottoNumber && (
              <Fragment>
                <span>
                  {lottoNumber.length - 1}장 확인하기
                  <br />
                </span>
                {lottoNumber.map((el, index) => (
                  <p className="numList">{index + 1 + '번' + ' | ' + el}</p>
                ))}
              </Fragment>
            )}
          </p>
        )}
      </Inputs>
    </Container>
  );
};

export default Test;

const Container = styled.div`
  width: 470px;
  padding: 5rem;
  margin: 0 auto;
`;
const Inputs = styled.div`
  input {
    height: 35px;
    padding: 5px;
    margin: 10px 0;
    width: 200px;
  }
  button {
    height: 35px;
    width: 50px;
    background-color: #ffc700;
    border: 1px solid #666;
    border-radius: 5px;
    margin-left: 5px;
  }
  .luckyNum {
    ::before {
      content: '행운의숫자는 → ';
      color: #ffc700;
    }
    margin: 20px 0;
    font-size: 18px;
    font-weight: 900;
    span {
      display: flex;
      background-color: #ffc700;
      padding: 9px 15px;
      margin: 10px auto;
      width: 139px;
      text-align: center;
      color: #fff;
    }
    .numList {
      &:last-child {
        display: none;
      }
    }
    button {
      margin: 10px auto;
      display: flex;
      width: 130px;
      padding: 10px 25px;
    }
  }
`;
