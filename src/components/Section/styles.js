import styled from "styled-components";

export const Container = styled.section`
    margin: 1rem 0 2rem;
    width: 100%;

    .header {
      width: 100%;

      border-top-width: 2px;
      border-top-style: solid;
      border-top-color: ${({ theme }) => theme.COLORS.secondary};

      padding-top: 1.4rem;
      margin-bottom: 2.4rem;
      
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .icon {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 1.6rem;
      background-color: ${({ theme }) => theme.COLORS.bg_form};
      color: ${({ theme }) => theme.COLORS.light_000};
    }

    h2 {
      

      color: ${({ theme }) => theme.COLORS.primary};
      font-size: 2rem;
      font-weight: 700;
    }
`;