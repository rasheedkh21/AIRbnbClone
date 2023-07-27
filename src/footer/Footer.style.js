import styled from "styled-components"

export const FooterDiv=styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-self: center;
width: 100%;
div{
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: center;
    align-items: center;
}
p{
    color: #222;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 128.571% */
}
h1{
    color: #222;
text-align: center;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 18px; /* 128.571% */
}

`