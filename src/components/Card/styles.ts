import styled from 'styled-components';

import { theme } from '../../styles/theme';
type ContainerProps = {
  $variant: 'balance' | 'incomes' | 'expenses';
};
const variantColorMap = {
  balance: theme.colors.info,
  incomes: theme.colors.sucess,
  expenses: theme.colors.error,
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
  background-color: ${theme.colors.dark};
  border-radius: 0.25rem;
  width: 100%;
  @media (max-width: 480px) {
    padding: 0.5rem;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  svg {
    height: 1.75rem;
    width: 1.75rem;
    fill: ${(props) => variantColorMap[props.$variant]};
    @media (max-width: 480px) {
      padding: 0.1rem;
    }
  }
  span {
    font-size: 1rem;
    font-weight: 300;
    color: ${theme.colors.neutral};
    @media (max-width: 480px) {
      padding: 0.1rem;
      font-size: 0.85rem;
    }
  }

  strong {
    font-size: 1rem;
    font-weight: 300;
    color: ${(props) => variantColorMap[props.$variant]};
    @media (max-width: 480px) {
      padding: 0.1rem;
      font-size: 0.85rem;
    }
  }
`;
