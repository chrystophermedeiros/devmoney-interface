import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.main`
  display: flex;
  gap: 0.75rem;
  width: 100%;
  padding: 0 1.5rem;
  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 0 0.75rem;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: space-between;
    gap: 0.2rem;
    overflow: hidden;
    label {
      margin-top: 1rem;
    }
    input {
      width: 100%;
      font-size: 0.8rem;
    }
  }
`;

export const Balance = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
`;

export const CharContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: ${theme.colors.dark};
  border-radius: 0.25rem;
  gap: 0.75rem;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const CharContent = styled.div`
  height: 14.5rem;
`;

export const CharAction = styled.div`
  display: flex;
  align-items: flex-end;
  width: 8rem;
  gap: 0.5rem;
`;

export const Aside = styled.aside`
  max-width: 22.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 0.25rem;
  background-color: ${theme.colors.dark};

  @media (max-width: 480px) {
    max-width: 100%;
  }

  header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`;

export const SearchTransaction = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.75rem;
  @media (max-width: 480px) {
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const TransactionGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.75rem;
`;
