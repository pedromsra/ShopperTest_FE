import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  table {
    width: 100%;
    border-collapse: collapse;
    border-style: hidden;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 18px;
    border-radius: 2rem;
  }

  th {
    padding: 2.1rem 2.4rem;

    text-align: start;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 160%;

    color: ${({ theme }) => theme.COLORS.primary};

    border: 1px solid ${({ theme }) => theme.COLORS.border_tb};

  }


  td{
    padding: 2.1rem 2.4rem;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 160%;

    color: ${({ theme }) => theme.COLORS.primary};

    vertical-align: middle;

    border: 1px solid ${({ theme }) => theme.COLORS.border_tb};

    > .orderStatus {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: .8rem;
        
    }

  }
`;

export const Tr = styled.tr`

  text-transform: capitalize;

  .update {
      text-transform: lowercase;
  }
`;