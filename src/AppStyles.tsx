import styled from '@emotion/styled';

export const BgContainer = styled.div`
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    min-width: 50%;
    min-height: 50%;
  }
`;

export const Side = styled.div`
  position: absolute;
  width: 30%;
  top: 30%;
  left: 25%;
  h1 {
    font-family: 'Montserrat';
    text-transform: uppercase;
  }
`;

export const Title = styled.h1`
  color: #5006A3;
  font-weight: bold;
`;

export const Ad = styled.h1`
  color: #FFFFFF;
  font-weight: bold;
  font-size: 3em;
`;

export const Logo = styled.img`
  width: 180px;
`;

export const Button = styled.button`
  background-color: #5006a3;
  padding: 20px 40px;
  border: 0px;
  border-radius: 15px;
  color: white;
  width: 200px;
  font-size: 1em;
  font-family: "Montserrat";
  cursor: pointer;
`;
