import { createColumnHelper } from '@tanstack/react-table';
import { CardCell } from 'Demo/type';

const columnHelper = createColumnHelper<CardCell>();

export const useColumns = () => {
  const columns = [
    columnHelper.accessor('value', {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
  ];

  return columns;
};
