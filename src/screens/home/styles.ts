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
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
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
  width: 22.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 0.25rem;
  background-color: ${theme.colors.dark};

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
`;

export const TransactionGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.75rem;
`;
