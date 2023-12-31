import styled from 'styled-components';

export const StyledMain = styled.main`
  display: flex;
  background-color: #f5f0e8;
  min-height: 80vh;
  width: 100vw;
  margin-top: 5rem;
`;

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: #ffffff;
  border-bottom: 1px solid black;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledMoviesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 80vw;
  min-height: 100vh;
  margin-left: 20vw;
`;

export const StyledMovieWrapper = styled.div`
  display: flex;
  background-color: #ccc5ba;
  flex-direction: row;
  margin: 7rem auto;
  width: 70vw;
  text-align: center;
  align-items: center;
  border: 1px;
  border-style: solid;
  border-radius: 16px;
`;

export const StyledCheckoutWrapper = styled(StyledMain)`
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  height: 60px;
`;
