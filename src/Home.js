import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const Home = () => {
  return (
    <Homes>
      <div className="main__img">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>
      <div className="home__row">
        <Product
          id="263645"
          title="Wyze Cam 1080p HD Indoor Wireless Smart Home Camera with Night Vision, 2-Way Audio, Works with Alexa & the Google Assistant, One Pack, White - WYZEC2"
          price={25.98}
          rating={4}
          img="https://m.media-amazon.com/images/I/61B04f0ALWL._AC_UY218_.jpg"
        />

        <Product
          id="757443"
          title="Amazon Brand - Solimo Tall Kitchen Drawstring Trash Bags, 13 Gallon, 120 Count"
          price={14.49}
          rating={4.6}
          img="https://images-na.ssl-images-amazon.com/images/I/41vaImNluxL._AC_US160_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="141254"
          title="The Body: A Guide for Occupants Kindle"
          price={11.96}
          rating={5}
          img="https://images-na.ssl-images-amazon.com/images/I/41h0H4SCgPL._AC_US160_.jpg"
        />
        <Product
          id="252323"
          title="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model)"
          price={329.0}
          rating={4.8}
          img="https://images-na.ssl-images-amazon.com/images/I/41aIidpbKwL._AC_SX184_.jpg"
        />
        <Product
          id="546434"
          title="60 Pack Dandy Decor Rose Gold Balloons + Confetti Balloons w/Ribbon | Rosegold Balloons for Parties | Bridal & Baby Shower Balloon Decorations | Latex Party Balloons | Graduation, Engagement, Wedding"
          price={9.95}
          rating={4}
          img="https://m.media-amazon.com/images/I/71yawJsgKhL._AC_UL320_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="434323"
          title="Samsung Electronics UN32N5300AFXZA 32' 1080p Smart LED TV (2018), Black"
          price={279.99}
          rating={5}
          img="https://m.media-amazon.com/images/I/91UsHjAPTlL._AC_UY218_.jpg"
        />
      </div>
    </Homes>
  );
};

export default Home;

const Homes = styled.section`
  max-width: 1500px;
  margin: 0 auto;
  .main__img {
    z-index: -1;
    margin-bottom: -150px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    & img {
      width: 100%;
    }
  }
  .home__row {
    display: flex;
    z-index: 1;
    margin: 0 5px;
  }
`;
