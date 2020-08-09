import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateVaule } from './StateProvider';
import { auth } from './firebase';

const Header = () => {
  const [{ basket, user }] = useStateVaule();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <Headers>
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon_LOGO"
        />
      </Link>

      <div className="header__serch">
        <input type="text" className="header__seachInput" />
        <SearchIcon className="header__seachIcon" />
      </div>

      <div className="header__nav">
        <div className="header__link">
          <Link to={!user && '/login'}>
            <div onClick={login}>
              <span>Hello {user?.email}</span>
              <span>{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
          </Link>
          <Link to="/">
            <div>
              <span>Returns</span>
              <span>&Orders</span>
            </div>
          </Link>
          <Link to="/">
            <div>
              <span>Your</span>
              <span>Prime</span>
            </div>
          </Link>
        </div>
      </div>

      <Link to="/checkout" className="header__bakset">
        <div>
          <ShoppingBasketIcon />
          <span>{basket?.length}</span>
        </div>
      </Link>
    </Headers>
  );
};

export default Header;

const Headers = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  background-color: #131921;
  .header__logo {
    width: 100px;
    margin: 18px 20px 0 20px;
    object-fit: contain;
  }
  .header__serch {
    display: flex;
    flex: 1;
    .header__seachInput {
      width: 100%;
      height: 12px;
      padding: 11px;
      border: none;
    }
    .header__seachIcon {
      height: 22px !important;
      padding: 5px;
      background-color: #cd9042;
    }
  }
  .header__nav {
    .header__link {
      display: flex;
      justify-content: space-evenly;
      a {
        color: #fff;
        text-decoration: none;
        div {
          display: flex;
          flex-direction: column;
          margin: 0 10px;
          span:nth-child(1) {
            font-size: 10px;
          }
          span:nth-child(2) {
            font-size: 13px;
            font-weight: 800;
          }
        }
      }
    }
  }
  .header__bakset {
    margin-right: 20px;
    text-decoration: none;
    div {
      display: flex;
      align-items: center;
      color: #fff;
      svg {
        margin: 0 5px;
      }
      span {
        margin: 0 10px;
      }
    }
  }
`;
