import styled from "styled-components";


export const NavDiv=styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
width: 100%;
height: 80px;
background: #FFF;
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.08);

`
export const SearchDiv=styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
width: 352.203px;
height: 48px;
border-radius: 40px;
border: 1px solid #DDD;
background: #FFF;
box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05), 0px 1px 2px 0px rgba(0, 0, 0, 0.08);
h1{
    color: #222;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 22px; /* 157.143% */
}
p{
    color: #717171;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 22px; /* 157.143% */
}
div{
    display: flex;
justify-content: center;
align-items: center;
display: flex;
width: 32px;
height: 32px;
/* padding: 10px; */
justify-content: center;
align-items: center;
border-radius:  50%;
background-color: #FF385C;
cursor: pointer;
}
`
export const HomeDiv=styled.div`
display: flex;
flex-direction: row;
gap: 20px;
justify-content: space-between;
align-items: center;
`
export const LoginDiv=styled.div`
display: inline-flex;
padding: 6px 6px 6px 13px;
align-items: center;
gap: 12px;
border-radius: 21px;
border: 1px solid #DDD;
background: #FFF;
cursor: pointer;
`