import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 7.1rem;

  padding: 0 3rem 0 3rem;

  background: linear-gradient(rgb(255, 255, 255) 30%, rgb(255, 255, 255) 60%, rgb(0, 45, 98) 317%);

  display: flex;
  flex-direction: row;

  grid-area: header;

  img {
    &:hover{
      cursor: pointer;
    }
  }

  .container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
  }

  
  .menuIcon {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .4rem;

    .icon {
      width: 3rem;
      height: 3rem;
      border-radius: 1.5rem;
      border: 1.8px solid #000000;
  
      display: flex;
      align-items: center;
      justify-content: center;
      color: #000000;
    }

    .description {
      font-size: 1rem;
      text-align: center;
      color: #000000
    }

    &:hover {
      cursor: pointer;
      font-weight: 700;
      .icon {
        background-color: #000000;
        color: #FFFFFF
      }
    }
  }

  a {
    text-decoration: none;
  }


`