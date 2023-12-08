import { ResponsivePie } from '@nivo/pie';
import { useMemo } from 'react';

import { theme } from '../../styles/theme';
import { formatCurrency } from '../../utils/format-currency';
const apiData = [
  {
    _id: '1',
    title: 'Alimentção',
    amount: 547,
    color: `${theme.colors.primary}`,
  },
  {
    _id: '2',
    title: 'Compras',
    amount: 341,
    color: `${theme.colors.warning}`,
  },
  {
    _id: '3',
    title: 'Mercado',
    amount: 494,
    color: `${theme.colors.error}`,
  },
  {
    _id: '4',
    title: 'Shopping',
    amount: 568,
    color: `${theme.colors.info}`,
  },
];

type CharDate = {
  id: string;
  label: string;
  externalID: string;
  value: number;
  color: string;
};

export function GraphicPieChar() {
  const data = useMemo<CharDate[]>(() => {
    const charData = apiData.map((item) => ({
      id: item.title,
      label: item.title,
      externalId: item._id,
      value: item.amount,
      color: item.color,
    }));
    return charData;
  }, []);
  return (
    <ResponsivePie
      data={data}
      enableArcLabels={true}
      enableArcLinkLabels={false}
      colors={({ data }) => data.color}
      margin={{ top: 8 }}
      valueFormat={formatCurrency}
      arcLabelsTextColor={'black'}
      theme={{
        text: {
          fontFamily: 'Lexend',
          fontSize: 10,
        },
        tooltip: {
          container: {
            backgroundColor: theme.colors.black,
            padding: 16,
            color: theme.colors.white,
            fontFamily: 'Lexend',
            fontSize: 12,
            borderRadius: 4,
          },
        },
      }}
      legends={[
        {
          anchor: 'right',
          direction: 'column',
          justify: false,
          translateX: 0,
          translateY: -12,
          itemWidth: 120,
          itemHeight: 16,
          itemTextColor: theme.colors.neutral,
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 10,
          symbolShape: 'circle',
        },
      ]}
    />
  );
}
