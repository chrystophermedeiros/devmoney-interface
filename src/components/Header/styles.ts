import styled from 'styled-components';

export const ComponentHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  width: 100%;

  @media (max-width: 480px) {
    gap: 0.5rem;
    padding: 1.5rem 0.7rem;
  }
  > div {
    display: flex;
    gap: 0.5rem;
  }
`;
