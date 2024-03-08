import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column;
  gap: 10px;
  font-family: helvetica;

  img{
    margin: auto;
    display: block;
    max-width: 600px;
    border-radius: 10%;
  }

`;

export const Info = styled.div`

  display: flex; 
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 200px;
  margin-top: 50px;


  h2{
    font-size: 2.5rem;
  }

  h3{
    font-size: 1.5rem;
  }

  li{
    font-size:1.5rem;
  }


`;

