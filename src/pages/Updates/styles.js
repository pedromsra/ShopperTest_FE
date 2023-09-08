import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
  "header"
  "main"
  ;

  main {
    grid-area: main;
    width: 100%;
    padding: clamp(5rem, 3rem + 4vw, 16rem);

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    align-items: center;
  }

  .reportsSections {
    width: 100%;
  }

  .inputFile {
    width: 100%;

    margin-bottom: 1.5rem;

    .inputButton {
      width: 100%;
      height: 4.8rem;

      padding: 10px;
      border-radius: 10px;
      border: none;
      color: white;

      font-family: 'Lato', sans-serif;
      font-weight: 700;
      font-size: 1.6rem;
      cursor: pointer;
      background-color: #0DAB77;
    }
  }

  .buttons {
    width: 50%;
  }

  .buttonsCheckUpdate {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1.5rem;
  }
  

`