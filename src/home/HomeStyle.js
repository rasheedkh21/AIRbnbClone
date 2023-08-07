import styled from "styled-components";
import image from "..//assets/Image.png";
import { ReactComponent as ImgCon } from "../assets/Icon3.svg";

export const Svgphotos = styled.div`
  display: flex;
  padding: 16px 0px 14px 0px;
  align-items: flex-start;
  gap: 32px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const LOgodiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.8rem;
    align-items: center;
    opacity: 0.5;
    margin: 1rem;
  }
  div:hover {
    opacity: 1;
    border-bottom: 1px solid black;
  }
`;
// svglani shu joyga yozaman
export const NextDiv = styled.div`
  display: flex;
  width: 26px;
  height: 26px;
  padding: 7px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background: #fff;
  cursor: pointer;
`;
export const Filters = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  align-items: center;
  padding: 0 15px 0 15px;
  align-items: flex-start;
  border-radius: 12px;
  border: 1px solid #ddd;
`;

export const Pricediv = styled.div`
  display: inline-flex;
  padding: 17px;
  align-items: flex-start;
  border-radius: 12px;
  border: 1px solid #ddd;
  gap: 20px;
  justify-content: space-around;
  align-items: center;
  h1 {
    color: #222;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 19px; /* 126.667% */
  }
  input {
    color: #717171;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px; /* 126.667% */
    padding-right: 150px;
  }
`;
export const ImageDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: fit-content;
`;
export const Infos = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BackImage = styled.div`
  display: flex;
  padding: 0 80px 0 80px;
  width: 100%;
  height: 286.891px;
  background-image: url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 30px;
`;
export const Writings = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }
  h1 {
    color: #222;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 19px; /* 126.667% */
  }
  p {
    color: #717171;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px; /* 126.667% */
  }
`;
export const Rating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  div {
    width: 100%;
    justify-content: space-evenly;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const SpanDiv = styled.div`
  border: 1px solid red;
  display: none;
`;
export const ImgWrapper = styled(ImgCon)`
  fill: ${(props) => (props.isClicked ? "#000000" : "initial")};
  cursor: pointer;
`;
