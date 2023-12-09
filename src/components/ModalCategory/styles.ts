import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > div {
      display: grid;
      grid-template-columns: 80% auto;
      grid-gap: 0.5rem;

      @media (max-width: 480px) {
        grid-template-columns: 60% auto;
        font-size: 0.5rem;
        input {
          font-size: 0.6rem;
        }
      }
    }
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.75rem;
  }
`;
