import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

import { formatCurrency } from '../../utils/format-currency';
import { Container } from './styles';
type CarProps = {
  variant?: 'balance' | 'incomes' | 'expenses';
  title: string;
  amount: number;
};

const iconsMap = {
  balance: <CurrencyExchangeIcon />,
  incomes: <ArrowCircleUpIcon />,
  expenses: <ArrowCircleDownIcon />,
};

export function Card({ variant = 'balance', title, amount }: CarProps) {
  return (
    <Container $variant={variant}>
      {iconsMap[variant]}
      <span>{title}</span>
      <strong>{formatCurrency(amount)}</strong>
    </Container>
  );
}
