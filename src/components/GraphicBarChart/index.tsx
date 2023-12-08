import { ResponsiveBar } from '@nivo/bar';
import dayjs from 'dayjs';
import ptBRLocale from 'dayjs/locale/pt-br';
import { useMemo } from 'react';

import { theme } from '../../styles/theme';
import { formatCurrency } from '../../utils/format-currency';

dayjs.locale(ptBRLocale);
const apiData = [
  {
    _id: {
      year: 2023,
      month: 1,
    },
    balance: 6880,
    incomes: 7634,
    expenses: 5455,
  },
  {
    _id: {
      year: 2023,
      month: 2,
    },
    balance: 8980,
    incomes: 7134,
    expenses: 5455,
  },
  {
    _id: {
      year: 2023,
      month: 3,
    },
    balance: 8980,
    incomes: 7134,
    expenses: 5545,
  },
  {
    _id: {
      year: 2023,
      month: 4,
    },
    balance: 8980,
    incomes: 7134,
    expenses: 5445,
  },
];

type CharData = {
  month: string;
  Saldo: number;
  Receitas: number;
  Gastos: number;
};

export function GraphicBarChar() {
  const data = useMemo<CharData[]>(() => {
    const chartData: CharData[] = apiData.map((item) => ({
      month: dayjs(`${item._id.month}-01`).format('MMM'),
      Saldo: item.balance,
      Receitas: item.incomes,
      Gastos: item.expenses,
    }));

    return chartData;
  }, []);

  return (
    <ResponsiveBar
      data={data}
      keys={['Saldo', 'Receitas', 'Gastos']}
      colors={[theme.colors.info, theme.colors.primary, theme.colors.error]}
      indexBy={'month'}
      groupMode="grouped"
      enableLabel={false}
      enableGridY={false}
      padding={0.2}
      axisLeft={{
        tickSize: 0,
        format: formatCurrency,
      }}
      margin={{ left: 80, bottom: 28 }}
      theme={{
        text: {
          fontFamily: 'lexend',
          fontSize: 10,
        },
        axis: {
          ticks: {
            text: {
              fill: theme.colors.white,
            },
          },
        },
        tooltip: {
          container: {
            backgroundColor: theme.colors.black,
            padding: 16,
            color: theme.colors.white,
            fontFamily: 'lexend',
            fontSize: 12,
            borderRadius: 4,
          },
        },
      }}
      valueFormat={formatCurrency}
    />
  );
}
