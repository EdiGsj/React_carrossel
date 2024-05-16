import styled from 'styled-components';

export const Carrossel_container = styled.div`
  position: relative;
  width: 350px;
  height: 200px;
  background-color: black;
  overflow: hidden;
  margin: 10px;
  user-select: none;
`;

export const Carrossel_items = styled.div`
  display: flex;
  position: absolute;
  position: relative;
  min-width: 350px;
  height: 200px;
  transition: transform 0.2s ease-in-out;

  & > div {
    position: relative;
    min-width: 350px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;


    h1 {
      color: white;
    }

    img {
      min-width: 100%;
      height: 100%;
    }
  }

`;

export const Carrossel_btn = styled.button`
  background-color: inherit;
  color: white;
  font-size: 20px;
  border: none;
  user-select: none;
  transition: 0.2s ease-in-out;

  &:hover{
    background-color: black; 
    border-radius: 100%;
    opacity: 0.5;
    transform: scale(2.0); 
}` 

